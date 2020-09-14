
const cheerio = require("cheerio");   //package for scrapping 
const fetch = require("node-fetch");  //package for fetch URL request 
/**
 * Scrap Meta Data from given URL - POST Method.
 * *
 * {@link /scrap}
 * @param {!String} url - Scrapping URL
 * @return {Object} - {@type JSON}
 */
async function scrapping(req, res, next){
    try{
        let data = req.body;
        let url = data.url?(data.url):null;
        if(!url){
            return res.status(501).json({
                status:false,
                result:"URL is required."
            });
        }
        let result = await fetch(url);
        let json = await result.text();  
        // console.log(json);
        var $= cheerio.load(json);
        let resObj = {},
        //set a reference to the document that came back
        //create a reference to the meta elements
        $title = $('head title').text(),
        $desc = $('meta[name="description"]').attr('content'),
        $ogTitle = $('meta[property="og:title"]').attr('content'),
        $ogImage = $('meta[property="og:image"]').attr('content'),
        $images = $('img');

        if ($title) {
            resObj.title = $title;
        }

        if ($desc) {
            resObj.description = $desc;
        }

        if ($ogImage && $ogImage.length){
            resObj.ogImage = $ogImage;
        }

        if ($ogTitle && $ogTitle.length){
            resObj.ogTitle = $ogTitle;
        }
        if ($images && $images.length){
            resObj.images = [];

            for (var i = 0; i < $images.length; i++) {
                resObj.images.push($($images[i]).attr('src'));
            }
        }
        console.log(resObj)
        return res.status(200).json({
            status: true,
            result:resObj
        })
    } catch(err){
        return next(err)
    }
}

//Export functions for allow accessing of outside from the file.
module.exports={
    scrapping,
}