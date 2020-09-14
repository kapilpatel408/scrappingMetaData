# scrappingMetaData

Server Deployment Document for x-SIM Backend<br>
<br>
Require Software:<br>
<br>
GIT<br>
Nodejs:  10+<br>
NPM: 6+<br>
PM2: 4+<br>
<br>
Take clone: <br>
Run command for install required packages<br>
npm i <br>
<br>
Run Command for running the project <br>
<br>
npm start<br>
<br>
Scrapping API Details:<br>
<br>
URL:http://localhost:3000/scrap<br>
Method: POST<br>
data:    JSON.stringify({"url":"https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles"}),<br>
headers: { 'Content-Type': 'application/json' },<br>
<br>
------------------------------
<br>
Output:<br>
<br>
{<br>
    "status": true,<br>
    "result": {<br>
        "title": "Mobile Phones: Buy New Mobiles Online at Best Prices in India | Buy Cell Phones Online - Amazon.in",<br>
        "description": "Amazon.in: Buy Best Mobile Phones online at Best prices in India at Amazon.in. Browse mobile phones from popular brands including Samsung, Micromax, Apple, HTC, Sony, Nokia, Motorola and more at Amazon.in.COD, Discounts available on eligible purchases.",<br>
        "ogTitle": "Mobile Phones: Buy New Mobiles Online at Best Prices in India | Buy Cell Phones Online - Amazon.in",<br>
        "images": [<br>
            "//fls-eu.amazon.in/1/batch/1/OP/A21TJRUUN4KGV:258-3457140-3136326:MGVA52V5F0ZTDMNDP3EH$uedata=s:%2Fmn%2Fsearch%2Fuedata%2F258-3457140-3136326%3Fstaticb%26id%3DMGVA52V5F0ZTDMNDP3EH:0",
            "https://images-na.ssl-images-amazon.com/images/G/31/gno/sprites/nav-sprite-global_bluebeacon-V3-1x_optimized._CB468962293_.png",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img19/MAI/Sweepstakes/June20/SWM_DownloadApp._CB410314483_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img18/Electronics/Megamenu/Megamenu_Electronics_top._CB485947327_.png",
            "https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel._CB485935036_.gif",
            "https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel._CB485935036_.gif",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_Note9Pro_Max/Available_Now/Per_Daycallout/V184735274_WLM_Redmi_T9B_mob_hero_1242x450_1._CB405352815_SY250_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Avicii/September/NextSale/ICICI/V214721272_IN_WLME_Avicii_LP_Mob_Hero_1242x450_1._SX414_CB405633531_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/OnePlus/June/26th/V209343660_IN_WL_OnePlus8Pro_NEXT._SY200_CB428087011_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_Note9Pro_Max/QC/QC._SY200_CB432333822_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M31s/QC_CC/V229886425_SamsungM_M31s_GW_Takeover_QuadCard_Template_420x420-2._SY200_CB406657915_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_Note9Pro_Max/QC/9ProMAx_QuadCard_420x420._SY200_CB428605140_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/OnePlus/may/may19/V203845781_IN_WL_QC_premium__420x420-3.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/yashash/OnePlus/7TSeries/7t-pro_420x420-21.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungBAU/Note10Lite/Ingress/QC/V171983084_IN_WLME_SamsungBAU_Note10Lite_pre-book_QC_420x420.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Apple/11/RevisedPrice/D15473944_Iphone11_Graphics_QC_2.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungBAU/S10/S10PlusRevised/V244819494_IN_WLME_S10-banner_QuadCard_Template_420x420_1.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/OPPO/Find_X2/Intrigue/D16841228_WL_RockBottom_QC_1_420x420.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/OPPO/QC/D16841228_WL_RockBottom_QC_A5s_1_420x420.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungBAU/V244819494_IN_WLME_S10-banner_QuadCard_Template_420x420-2.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/CatPage/Affordability/NCE.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/CatPage/Affordability/Exchange.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/CatPage/Affordability/TDP.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/CatPage/Affordability/GEP.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_9A/V242308626_IN_WLME_Redmi_G3L_Hex_card_180x220._SY250_CB406678289_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_G3M/LP/V232845450_WLM_Redmi_G3M_Launch_productpage_Hex-card_180x220._SY250_CB406141720_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Hex_card/V232845450_WLM_Redmi_T91_Launch_productpage_Hex-card_180x220._SY250_CB406905087_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Hex_card/D17052101_IN_WLME_Redmi_Note9_LandingPage_hexcard_Nano_Card_180x220._SY250_CB409410910_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Hex_card/Mi_Card_180x220._SY250_CB431970269_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Hex_card/New_hex_card_._SY250_CB431600698_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Honor/Honor_9A/CatPage-QC/D17051806_Honor_9A_Launch_QC_420x420-AvailableNow._SY200_CB404925791_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/LG/G8X/CatPage/V164405744_IN_WLME_LG_G8X_TeaserLP_Graphics_QuadCard_420x420_1_CB426948829_._SY200_CB410401151_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Huawei/QC/V195775283_IN_WL_HuaweiY9s_QuadCard_420x420_new._SY200_CB409190272_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Techno/Spark6Air/QC/RV2/P38564895_WLM_TechnoSpark6Air_QuadCard_Template_420x420-2._SY200_CB407759913_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/yashash/vivo/CatPage/HexCard/July/V228270898_IN_WL_VivoX50_Shop_now_vivo-hex-cards_180x220_6._SY250_CB409705294_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/vivo/hex/Sep/10th/P39459554_IN_WLM_Cat_Vivo_hex_card_hex_Nano_Card_180x220_2._SY250_CB405297616_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/vivo/hex/Sep/10th/P39459554_IN_WLM_Cat_Vivo_hex_card_hex_Nano_Card_180x220_5._SY250_CB405297616_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/yashash/vivo/CatPage/HexCard/July/V228270898_IN_WL_VivoX50_Shop_now-hex-cards_180x220._SY250_CB409813528_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/vivo/hex/Sep/10th/P39459554_IN_WLM_Cat_Vivo_hex_card_hex_Nano_Card_180x220_4._SY250_CB405304470_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/yashash/vivo/CatPage/HexCard/July/V228270898_IN_WL_VivoX50_Shop_now_vivo-hex-cards_180x220_1._SY250_CB409705330_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/OPPO/Hex/July/D14404349_IN_WLME_OPPO_Smartphones_hexcard_hex-cards_180x220._SY250_CB409270229_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/OPPO/Reno3Pro/Rv1_price._SY250_CB407388355_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/OPPO/Hex/July/D14404349_IN_WLME_OPPO_Smartphones_hexcard_hex-cards_180x220_4._SY250_CB410708598_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/OPPO/Hex/July/D14404349_IN_WLME_OPPO_Smartphones_hexcard_hex-cards_180x220_3._SY250_CB410708598_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/OPPO/Hex/July/D14404349_IN_WLME_OPPO_Smartphones_hexcard_hex-cards_180x220_2._SY250_CB410708599_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/OPPO/Hex/July/D14404349_IN_WLME_OPPO_Smartphones_hexcard_hex-cards_180x220_8._SY250_CB410708593_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/September/Headsets/realmeBudsClassic/White/V248982080_WLA-realme_Buds_Classic_White_Mob_Hero_1242x450._SX414_CB405393760_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/April/Uber/Cat_Page/HnS/V195123777_IN_WLA_Headsets_QC_FPF-Hex-cards_3._SY250_CB435109189_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/April/Uber/Cat_Page/HnS/V195123777_IN_WLA_Headsets_QC_FPF-Hex-cards_2._SY250_CB435109189_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/April/Uber/Cat_Page/HnS/V195123777_IN_WLA_Headsets_QC_FPF-Hex-cards_4._SY250_CB435109189_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/April/Uber/Cat_Page/HnS/V195123777_IN_WLA_Headsets_QC_FPF-Hex-cards_5._SY250_CB435109189_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/April/Uber/Cat_Page/HnS/V195123777_IN_WLA_Headsets_QC_FPF-Hex-cards_6._SY250_CB435109189_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/April/Uber/Cat_Page/HnS/V195123777_IN_WLA_Headsets_QC_FPF-Hex-cards_7._SY250_CB435109188_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Certified_Refurbished/XCM_Manual_1500x300_1216785_in_certified_refurbished_renewed_mobiles_category_1093f42a_fae7_4c3c_bd5e_35fb0bd1b71e_jpg_LOWER_QL85_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/CatPage/Whitestripe_50._CB420499115_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/CatPage/1500x100_1.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/OnePlus/new_logo/D15815299_IN_WL_OnePlus_new_logo_brand_farm._CB1198675309_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img18/Wireless/CEEX/mi-brand-farm.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img18/Wireless/Catpage/BrandFarm/liwuwe_2018-05-07T11-25_f0461b_1113497_350x100_gps_cn_17.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img18/Wireless/Vivo/vivo-brand-farm_350x100.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/CatPage/ShopbyBrand/Realme-Brand.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/OPPO/350x100.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img18/Wireless/Catpage/BrandFarm/liwuwe_2018-05-07T11-25_f0461b_1113497_350x100_gps_cn_13._CB485921160_SY100_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img18/Wireless/Catpage/BrandFarm/HONOR_LOGO.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/LG/9f966450090a8f24a54d95ab7a55e130ad4139051770965b41a787792fe1a784.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img18/Wireless/CEEX/HuaweiP20/Huawei_logo_350x100.png",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img18/Wireless/Catpage/BrandFarm/liwuwe_2018-05-07T11-25_f0461b_1113497_350x100_gps_cn_2.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/March/Headsets/Jabra/Laucnh/Jabra._CB1198675309_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/CatPage/Whitestripe20_PC.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/CatPage/1500x100_2._CB420506133_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/CatPage/Revamp/Shpbyprice/PRICE_LIST_Nano_Card_180x220_1._SY250_CB463427790_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/CatPage/Revamp/Shpbyprice/PRICE_LIST_Nano_Card_180x220_2._SY250_CB463427791_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/CatPage/Revamp/Shpbyprice/PRICE_LIST_Nano_Card_180x220_3._SY250_CB463427791_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/CatPage/Revamp/Shpbyprice/PRICE_LIST_Nano_Card_180x220_4._SY250_CB463427790_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/CatPage/Revamp/Shpbyprice/PRICE_LIST_Nano_Card_180x220_5._SY250_CB463427790_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/CatPage/Revamp/Shpbyprice/PRICE_LIST_Nano_Card_180x220_6._SY250_CB463427790_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/41DURkOgGpL._AC_US160_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/41BI4pshRFL._AC_US160_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/31e78m6CTEL._AC_US160_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/31IdiM9ZM8L._AC_US160_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/31peh6pTVKL._AC_US160_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/41xg1z2h-uL._AC_US160_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/41+xWzgV8jL._AC_US160_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/31vKQS4TCfL._AC_US160_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/41xuyt5KFCL._AC_US160_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/41QGvXH2TKL._AC_US160_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/41cVLRT2gyL._AC_US160_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/51Fc-xm6bKL._AC_US160_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/31Td2leGx6L._AC_US160_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/419Sb0zGlnL._AC_US160_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/51HfbNSrA6L._AC_US160_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/41mPjjqqNnL._AC_US160_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/31Z2ee9oYQL._AC_US160_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/31f6tgbUcaL._AC_US160_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/41wZwaFq4PL._AC_US160_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/41j7VEAjdRL._AC_US160_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/41-8MOo7SgL._AC_US160_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/41KyL5NkRRL._AC_US160_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/41hQJVt5gNL._AC_US160_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/41xg1z2h-uL._AC_US160_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/31+FkuMhQrL._AC_US160_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/41cVLRT2gyL._AC_US160_.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/41net0QeTqL._AC_US160_.jpg",
            "https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel._CB485935036_.gif",
            "https://images-eu.ssl-images-amazon.com/images/G/31/nav2/images/gui/prime-check-badge-14._CB485947259_.gif",
            "https://images-eu.ssl-images-amazon.com/images/G/31/personalization/ybh/loading-4x-gray._CB485916689_.gif"<br>
        ]<br>
    }<br>
}<br>
<br>
