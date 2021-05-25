// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "我的小猪",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "生日快乐",  // 同上...
        "今天也是感恩和你约会的一天",
        "你问过我喜欢你什么",
        "现在我可以好好回答这个问题",
        "我喜欢你first date没送出的花",
        "喜欢你当晚删掉tinder",
        "喜欢和你旁若无人接吻相拥",
        "喜欢和你牵手坐地铁一起回家",
        "喜欢我喜欢的男人坐在我的沙发上（如果他没穿内裤就更好了",
        "喜欢我每次害怕失望都会被你温柔接住",
        "希望你的24岁",
        "在我的陪伴下",
        "可以每天开心",
        "我们会在夏天看烟花 在冬天滑雪",
        "也会在忙碌的工作日",
        "听我吐槽难搞的项目",
        "听你抒发负面情绪",
        "It's hard to be a grown-up",
        "but we're a team",
        "还会在珍贵的周末",
        "一起晚餐散步",
        "窝着吃水果看电影",
        "看展打卡餐厅",
        "I will love you more every single day",
        "and be your best friend for life",
        "Here's to learning and growing tpgether...",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的小可爱": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "TURN ON LIGHTS",
        play: "PLAY THE MUSIC",
        bannar_coming: "LET'S DECORATE",
        balloons_flying: "FLY WITH BALLOONS",
        cake_fadein: "MOST DELICIOUS CAKE EVER",
        light_candle: "LIGHT CANDLES",
        wish_message: "HAPPY BIRTHDAY",
        story: "A MESSAGE FOR YOU",
    }
};
