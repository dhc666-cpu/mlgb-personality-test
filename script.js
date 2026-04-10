// 测试题目
const questions = [
    {
        text: "当你看到一只流浪猫时，你会怎么做？",
        options: [
            { text: "直接抱回家养", score: { crazy: 8, weird: 6, pretend: 2, funny: 7 } },
            { text: "给它拍照发朋友圈", score: { crazy: 3, weird: 4, pretend: 8, funny: 5 } },
            { text: "无视它继续走", score: { crazy: 2, weird: 2, pretend: 3, funny: 1 } },
            { text: "和它聊半小时天", score: { crazy: 7, weird: 8, pretend: 1, funny: 6 } }
        ]
    },
    {
        text: "如果可以拥有一种超能力，你会选择？",
        options: [
            { text: "瞬间移动到任何地方", score: { crazy: 5, weird: 3, pretend: 6, funny: 4 } },
            { text: "和动物交流", score: { crazy: 4, weird: 7, pretend: 2, funny: 5 } },
            { text: "让时间停止", score: { crazy: 7, weird: 5, pretend: 4, funny: 3 } },
            { text: "变成任何物体", score: { crazy: 8, weird: 8, pretend: 3, funny: 7 } }
        ]
    },
    {
        text: "你认为最理想的早餐是？",
        options: [
            { text: "汉堡薯条", score: { crazy: 6, weird: 4, pretend: 5, funny: 7 } },
            { text: "生鱼片", score: { crazy: 7, weird: 7, pretend: 6, funny: 4 } },
            { text: "粥和咸菜", score: { crazy: 2, weird: 1, pretend: 3, funny: 2 } },
            { text: "巧克力和可乐", score: { crazy: 8, weird: 6, pretend: 2, funny: 8 } }
        ]
    },
    {
        text: "当你感到压力大时，你会？",
        options: [
            { text: "疯狂购物", score: { crazy: 7, weird: 3, pretend: 8, funny: 5 } },
            { text: "一个人去鬼屋", score: { crazy: 8, weird: 7, pretend: 4, funny: 6 } },
            { text: "安静地看书", score: { crazy: 2, weird: 2, pretend: 5, funny: 3 } },
            { text: "在马路上跳舞", score: { crazy: 9, weird: 8, pretend: 2, funny: 9 } }
        ]
    },
    {
        text: "你最喜欢的电影类型是？",
        options: [
            { text: "恐怖电影", score: { crazy: 7, weird: 8, pretend: 3, funny: 4 } },
            { text: "浪漫喜剧", score: { crazy: 3, weird: 2, pretend: 6, funny: 7 } },
            { text: "科幻片", score: { crazy: 5, weird: 6, pretend: 5, funny: 4 } },
            { text: "纪录片", score: { crazy: 2, weird: 3, pretend: 4, funny: 2 } }
        ]
    },
    {
        text: "如果可以和历史上任何人共进晚餐，你会选择？",
        options: [
            { text: "爱因斯坦", score: { crazy: 4, weird: 5, pretend: 7, funny: 3 } },
            { text: "拿破仑", score: { crazy: 7, weird: 4, pretend: 8, funny: 4 } },
            { text: "外星人", score: { crazy: 9, weird: 9, pretend: 3, funny: 7 } },
            { text: "自己的未来版本", score: { crazy: 8, weird: 7, pretend: 5, funny: 6 } }
        ]
    },
    {
        text: "你认为最好的放松方式是？",
        options: [
            { text: "泡热水澡", score: { crazy: 3, weird: 2, pretend: 6, funny: 4 } },
            { text: "玩极限运动", score: { crazy: 9, weird: 6, pretend: 7, funny: 5 } },
            { text: "听重金属音乐", score: { crazy: 7, weird: 5, pretend: 4, funny: 6 } },
            { text: "整理房间", score: { crazy: 2, weird: 3, pretend: 5, funny: 2 } }
        ]
    },
    {
        text: "如果可以拥有一个宠物，你会选择？",
        options: [
            { text: "狗", score: { crazy: 4, weird: 1, pretend: 5, funny: 6 } },
            { text: "蛇", score: { crazy: 7, weird: 8, pretend: 3, funny: 4 } },
            { text: "机器人", score: { crazy: 6, weird: 7, pretend: 6, funny: 5 } },
            { text: "恐龙", score: { crazy: 9, weird: 9, pretend: 2, funny: 8 } }
        ]
    },
    {
        text: "你最喜欢的颜色是？",
        options: [
            { text: "红色", score: { crazy: 8, weird: 4, pretend: 6, funny: 7 } },
            { text: "黑色", score: { crazy: 6, weird: 6, pretend: 7, funny: 4 } },
            { text: "荧光绿", score: { crazy: 7, weird: 8, pretend: 3, funny: 8 } },
            { text: "粉色", score: { crazy: 5, weird: 5, pretend: 8, funny: 6 } }
        ]
    },
    {
        text: "当你在电梯里遇到陌生人时，你会？",
        options: [
            { text: "微笑点头", score: { crazy: 3, weird: 2, pretend: 6, funny: 4 } },
            { text: "开始唱歌", score: { crazy: 8, weird: 7, pretend: 3, funny: 9 } },
            { text: "盯着对方看", score: { crazy: 6, weird: 8, pretend: 4, funny: 5 } },
            { text: "假装看手机", score: { crazy: 2, weird: 3, pretend: 7, funny: 3 } }
        ]
    },
    {
        text: "你认为人生的意义是什么？",
        options: [
            { text: "追求财富", score: { crazy: 4, weird: 2, pretend: 8, funny: 3 } },
            { text: "寻找快乐", score: { crazy: 6, weird: 3, pretend: 4, funny: 8 } },
            { text: "探索未知", score: { crazy: 8, weird: 7, pretend: 5, funny: 6 } },
            { text: "毁灭世界", score: { crazy: 9, weird: 9, pretend: 2, funny: 7 } }
        ]
    },
    {
        text: "如果可以穿越到过去，你会？",
        options: [
            { text: "改变历史", score: { crazy: 8, weird: 6, pretend: 7, funny: 5 } },
            { text: "见一见自己的祖先", score: { crazy: 5, weird: 4, pretend: 5, funny: 6 } },
            { text: "购买未来会升值的物品", score: { crazy: 6, weird: 3, pretend: 8, funny: 4 } },
            { text: "什么都不做，只是观察", score: { crazy: 3, weird: 5, pretend: 4, funny: 3 } }
        ]
    },
    {
        text: "你最喜欢的季节是？",
        options: [
            { text: "春天", score: { crazy: 4, weird: 2, pretend: 6, funny: 5 } },
            { text: "夏天", score: { crazy: 7, weird: 3, pretend: 5, funny: 7 } },
            { text: "秋天", score: { crazy: 5, weird: 4, pretend: 7, funny: 4 } },
            { text: "冬天", score: { crazy: 6, weird: 5, pretend: 4, funny: 6 } }
        ]
    },
    {
        text: "当你收到一份不喜欢的礼物时，你会？",
        options: [
            { text: "假装很喜欢", score: { crazy: 3, weird: 2, pretend: 9, funny: 4 } },
            { text: "直接说不喜欢", score: { crazy: 7, weird: 5, pretend: 2, funny: 6 } },
            { text: "重新包装后送给别人", score: { crazy: 6, weird: 4, pretend: 7, funny: 5 } },
            { text: "当场扔掉", score: { crazy: 8, weird: 7, pretend: 1, funny: 8 } }
        ]
    },
    {
        text: "你认为最有趣的工作是？",
        options: [
            { text: "演员", score: { crazy: 6, weird: 4, pretend: 8, funny: 7 } },
            { text: "探险家", score: { crazy: 8, weird: 6, pretend: 5, funny: 6 } },
            { text: "小丑", score: { crazy: 7, weird: 7, pretend: 4, funny: 9 } },
            { text: "程序员", score: { crazy: 4, weird: 5, pretend: 3, funny: 3 } }
        ]
    },
    {
        text: "如果可以拥有一个超能力，你会用它来？",
        options: [
            { text: "帮助别人", score: { crazy: 3, weird: 2, pretend: 6, funny: 4 } },
            { text: "恶作剧", score: { crazy: 8, weird: 7, pretend: 3, funny: 9 } },
            { text: "赚钱", score: { crazy: 5, weird: 3, pretend: 8, funny: 4 } },
            { text: "统治世界", score: { crazy: 9, weird: 8, pretend: 6, funny: 6 } }
        ]
    },
    {
        text: "你最喜欢的食物是？",
        options: [
            { text: "火锅", score: { crazy: 6, weird: 3, pretend: 5, funny: 7 } },
            { text: "寿司", score: { crazy: 5, weird: 4, pretend: 7, funny: 5 } },
            { text: "臭豆腐", score: { crazy: 7, weird: 8, pretend: 2, funny: 6 } },
            { text: "冰淇淋", score: { crazy: 4, weird: 2, pretend: 4, funny: 6 } }
        ]
    },
    {
        text: "当你遇到困难时，你会？",
        options: [
            { text: "独自解决", score: { crazy: 5, weird: 3, pretend: 6, funny: 4 } },
            { text: "寻求帮助", score: { crazy: 3, weird: 2, pretend: 5, funny: 5 } },
            { text: "逃避", score: { crazy: 4, weird: 4, pretend: 3, funny: 3 } },
            { text: "把它变成游戏", score: { crazy: 8, weird: 6, pretend: 4, funny: 8 } }
        ]
    },
    {
        text: "你认为最好的朋友应该是？",
        options: [
            { text: "随叫随到", score: { crazy: 5, weird: 3, pretend: 6, funny: 5 } },
            { text: "一起疯狂", score: { crazy: 8, weird: 6, pretend: 3, funny: 8 } },
            { text: "相互理解", score: { crazy: 4, weird: 2, pretend: 5, funny: 4 } },
            { text: "有钱有势", score: { crazy: 6, weird: 4, pretend: 8, funny: 3 } }
        ]
    },
    {
        text: "如果可以拥有一个自己的岛屿，你会？",
        options: [
            { text: "建造豪华别墅", score: { crazy: 5, weird: 3, pretend: 9, funny: 4 } },
            { text: "过原始生活", score: { crazy: 7, weird: 7, pretend: 2, funny: 6 } },
            { text: "开派对", score: { crazy: 8, weird: 5, pretend: 6, funny: 8 } },
            { text: "养一群奇怪的动物", score: { crazy: 9, weird: 9, pretend: 3, funny: 7 } }
        ]
    },
    {
        text: "你最喜欢的音乐类型是？",
        options: [
            { text: "流行音乐", score: { crazy: 4, weird: 2, pretend: 6, funny: 6 } },
            { text: "摇滚", score: { crazy: 7, weird: 5, pretend: 5, funny: 7 } },
            { text: "电子音乐", score: { crazy: 8, weird: 6, pretend: 4, funny: 8 } },
            { text: "古典音乐", score: { crazy: 3, weird: 4, pretend: 7, funny: 3 } }
        ]
    },
    {
        text: "当你看到有人在公共场所大声说话时，你会？",
        options: [
            { text: "无视", score: { crazy: 2, weird: 2, pretend: 4, funny: 2 } },
            { text: "提醒对方", score: { crazy: 4, weird: 3, pretend: 6, funny: 4 } },
            { text: "比对方更大声", score: { crazy: 8, weird: 7, pretend: 3, funny: 8 } },
            { text: "拍照发社交媒体", score: { crazy: 6, weird: 5, pretend: 7, funny: 6 } }
        ]
    },
    {
        text: "你认为爱情是什么？",
        options: [
            { text: "化学反应", score: { crazy: 5, weird: 4, pretend: 5, funny: 4 } },
            { text: "灵魂伴侣", score: { crazy: 4, weird: 3, pretend: 7, funny: 5 } },
            { text: "游戏", score: { crazy: 7, weird: 6, pretend: 4, funny: 7 } },
            { text: "麻烦", score: { crazy: 6, weird: 5, pretend: 3, funny: 6 } }
        ]
    },
    {
        text: "如果可以和动物交流，你最想和哪种动物说话？",
        options: [
            { text: "猫", score: { crazy: 4, weird: 4, pretend: 5, funny: 6 } },
            { text: "鲸鱼", score: { crazy: 6, weird: 7, pretend: 4, funny: 5 } },
            { text: "蟑螂", score: { crazy: 8, weird: 9, pretend: 2, funny: 7 } },
            { text: "熊猫", score: { crazy: 3, weird: 2, pretend: 6, funny: 4 } }
        ]
    },
    {
        text: "你最喜欢的运动是？",
        options: [
            { text: "足球", score: { crazy: 6, weird: 3, pretend: 5, funny: 6 } },
            { text: "瑜伽", score: { crazy: 3, weird: 4, pretend: 6, funny: 3 } },
            { text: "跳伞", score: { crazy: 9, weird: 6, pretend: 7, funny: 7 } },
            { text: "电子竞技", score: { crazy: 5, weird: 5, pretend: 4, funny: 5 } }
        ]
    },
    {
        text: "当你感到无聊时，你会？",
        options: [
            { text: "看电影", score: { crazy: 3, weird: 2, pretend: 4, funny: 5 } },
            { text: "逛街", score: { crazy: 4, weird: 3, pretend: 7, funny: 6 } },
            { text: "发明奇怪的东西", score: { crazy: 8, weird: 8, pretend: 3, funny: 7 } },
            { text: "睡觉", score: { crazy: 2, weird: 2, pretend: 3, funny: 2 } }
        ]
    },
    {
        text: "你认为最好的学习方式是？",
        options: [
            { text: "课堂学习", score: { crazy: 2, weird: 2, pretend: 5, funny: 3 } },
            { text: "实践经验", score: { crazy: 5, weird: 4, pretend: 4, funny: 6 } },
            { text: "自学", score: { crazy: 6, weird: 5, pretend: 3, funny: 5 } },
            { text: "通过游戏学习", score: { crazy: 7, weird: 6, pretend: 2, funny: 8 } }
        ]
    },
    {
        text: "如果可以拥有一个超能力，你会选择？",
        options: [
            { text: "读心术", score: { crazy: 6, weird: 6, pretend: 5, funny: 4 } },
            { text: "隐身", score: { crazy: 7, weird: 7, pretend: 4, funny: 6 } },
            { text: "飞行", score: { crazy: 5, weird: 3, pretend: 6, funny: 5 } },
            { text: "变形", score: { crazy: 8, weird: 8, pretend: 3, funny: 7 } }
        ]
    },
    {
        text: "你最喜欢的节日是？",
        options: [
            { text: "春节", score: { crazy: 5, weird: 2, pretend: 6, funny: 6 } },
            { text: "万圣节", score: { crazy: 8, weird: 8, pretend: 5, funny: 9 } },
            { text: "情人节", score: { crazy: 4, weird: 3, pretend: 7, funny: 5 } },
            { text: "愚人节", score: { crazy: 7, weird: 6, pretend: 4, funny: 8 } }
        ]
    },
    {
        text: "当你看到一个陌生人掉了钱包，你会？",
        options: [
            { text: "捡起还给对方", score: { crazy: 3, weird: 2, pretend: 6, funny: 4 } },
            { text: "悄悄拿走", score: { crazy: 7, weird: 5, pretend: 3, funny: 5 } },
            { text: "把钱拿走，钱包扔掉", score: { crazy: 8, weird: 7, pretend: 2, funny: 6 } },
            { text: "等对方回来找", score: { crazy: 4, weird: 3, pretend: 5, funny: 3 } }
        ]
    },
    {
        text: "你认为最美好的地方是？",
        options: [
            { text: "海滩", score: { crazy: 4, weird: 2, pretend: 6, funny: 6 } },
            { text: "山顶", score: { crazy: 6, weird: 4, pretend: 5, funny: 5 } },
            { text: "太空", score: { crazy: 8, weird: 7, pretend: 4, funny: 6 } },
            { text: "自己的房间", score: { crazy: 3, weird: 3, pretend: 3, funny: 4 } }
        ]
    },
    {
        text: "当你收到一条匿名短信时，你会？",
        options: [
            { text: "回复询问", score: { crazy: 5, weird: 4, pretend: 5, funny: 5 } },
            { text: "无视", score: { crazy: 2, weird: 2, pretend: 4, funny: 3 } },
            { text: "打电话过去", score: { crazy: 6, weird: 5, pretend: 4, funny: 6 } },
            { text: "报警", score: { crazy: 4, weird: 3, pretend: 6, funny: 4 } }
        ]
    },
    {
        text: "你最喜欢的书籍类型是？",
        options: [
            { text: "小说", score: { crazy: 4, weird: 3, pretend: 5, funny: 5 } },
            { text: "科幻", score: { crazy: 6, weird: 6, pretend: 4, funny: 6 } },
            { text: "恐怖", score: { crazy: 7, weird: 7, pretend: 3, funny: 5 } },
            { text: "漫画", score: { crazy: 5, weird: 4, pretend: 2, funny: 7 } }
        ]
    },
    {
        text: "如果可以拥有一个超能力，你会用它来？",
        options: [
            { text: "环游世界", score: { crazy: 5, weird: 3, pretend: 6, funny: 7 } },
            { text: "帮助穷人", score: { crazy: 3, weird: 2, pretend: 7, funny: 5 } },
            { text: "报复仇人", score: { crazy: 8, weird: 6, pretend: 3, funny: 6 } },
            { text: "做实验", score: { crazy: 7, weird: 8, pretend: 4, funny: 4 } }
        ]
    },
    {
        text: "你认为最好的沟通方式是？",
        options: [
            { text: "面对面", score: { crazy: 4, weird: 2, pretend: 5, funny: 5 } },
            { text: "短信", score: { crazy: 3, weird: 3, pretend: 4, funny: 4 } },
            { text: "视频通话", score: { crazy: 5, weird: 4, pretend: 6, funny: 6 } },
            { text: "写信", score: { crazy: 6, weird: 5, pretend: 7, funny: 3 } }
        ]
    },
    {
        text: "当你看到一个人在哭，你会？",
        options: [
            { text: "安慰对方", score: { crazy: 3, weird: 2, pretend: 6, funny: 4 } },
            { text: "无视", score: { crazy: 4, weird: 3, pretend: 3, funny: 3 } },
            { text: "讲笑话", score: { crazy: 6, weird: 4, pretend: 4, funny: 7 } },
            { text: "一起哭", score: { crazy: 7, weird: 6, pretend: 2, funny: 6 } }
        ]
    },
    {
        text: "你认为最珍贵的东西是？",
        options: [
            { text: "亲情", score: { crazy: 3, weird: 2, pretend: 5, funny: 4 } },
            { text: "友情", score: { crazy: 4, weird: 3, pretend: 4, funny: 6 } },
            { text: "自由", score: { crazy: 7, weird: 5, pretend: 3, funny: 5 } },
            { text: "金钱", score: { crazy: 5, weird: 4, pretend: 8, funny: 3 } }
        ]
    },
    {
        text: "如果可以拥有一个超能力，你会选择？",
        options: [
            { text: "治愈能力", score: { crazy: 3, weird: 2, pretend: 6, funny: 4 } },
            { text: "控制时间", score: { crazy: 8, weird: 7, pretend: 5, funny: 6 } },
            { text: "控制天气", score: { crazy: 7, weird: 6, pretend: 4, funny: 7 } },
            { text: "变成动物", score: { crazy: 6, weird: 8, pretend: 3, funny: 8 } }
        ]
    },
    {
        text: "你最喜欢的数字是？",
        options: [
            { text: "7", score: { crazy: 4, weird: 3, pretend: 5, funny: 5 } },
            { text: "42", score: { crazy: 5, weird: 5, pretend: 4, funny: 6 } },
            { text: "666", score: { crazy: 7, weird: 6, pretend: 3, funny: 7 } },
            { text: "0", score: { crazy: 6, weird: 7, pretend: 4, funny: 4 } }
        ]
    },
    {
        text: "当你遇到一个难题时，你会？",
        options: [
            { text: "仔细思考", score: { crazy: 3, weird: 2, pretend: 5, funny: 3 } },
            { text: "问别人", score: { crazy: 4, weird: 3, pretend: 4, funny: 4 } },
            { text: "随机尝试", score: { crazy: 7, weird: 5, pretend: 2, funny: 6 } },
            { text: "放弃", score: { crazy: 2, weird: 4, pretend: 3, funny: 2 } }
        ]
    },
    {
        text: "你认为最好的旅行方式是？",
        options: [
            { text: "跟团", score: { crazy: 3, weird: 2, pretend: 5, funny: 4 } },
            { text: "自由行", score: { crazy: 6, weird: 4, pretend: 4, funny: 7 } },
            { text: "徒步", score: { crazy: 7, weird: 5, pretend: 3, funny: 6 } },
            { text: "自驾游", score: { crazy: 5, weird: 3, pretend: 6, funny: 5 } }
        ]
    },
    {
        text: "当你看到一个人在做奇怪的事情，你会？",
        options: [
            { text: "拍照", score: { crazy: 6, weird: 5, pretend: 6, funny: 7 } },
            { text: "加入", score: { crazy: 8, weird: 7, pretend: 3, funny: 8 } },
            { text: "离开", score: { crazy: 2, weird: 3, pretend: 4, funny: 3 } },
            { text: "围观", score: { crazy: 4, weird: 4, pretend: 5, funny: 5 } }
        ]
    },
    {
        text: "你认为最美好的回忆是？",
        options: [
            { text: "童年", score: { crazy: 3, weird: 2, pretend: 5, funny: 4 } },
            { text: "旅行", score: { crazy: 5, weird: 3, pretend: 6, funny: 6 } },
            { text: "成功", score: { crazy: 4, weird: 2, pretend: 7, funny: 5 } },
            { text: "意外", score: { crazy: 7, weird: 6, pretend: 3, funny: 7 } }
        ]
    },
    {
        text: "如果可以拥有一个超能力，你会选择？",
        options: [
            { text: "读心术", score: { crazy: 6, weird: 6, pretend: 5, funny: 4 } },
            { text: "隐身", score: { crazy: 7, weird: 7, pretend: 4, funny: 6 } },
            { text: "飞行", score: { crazy: 5, weird: 3, pretend: 6, funny: 5 } },
            { text: "变形", score: { crazy: 8, weird: 8, pretend: 3, funny: 7 } }
        ]
    },
    {
        text: "你最喜欢的饮料是？",
        options: [
            { text: "水", score: { crazy: 2, weird: 1, pretend: 3, funny: 2 } },
            { text: "咖啡", score: { crazy: 4, weird: 3, pretend: 6, funny: 4 } },
            { text: "啤酒", score: { crazy: 6, weird: 4, pretend: 4, funny: 7 } },
            { text: "奇怪的混合饮料", score: { crazy: 8, weird: 8, pretend: 2, funny: 8 } }
        ]
    },
    {
        text: "当你感到愤怒时，你会？",
        options: [
            { text: "冷静思考", score: { crazy: 3, weird: 2, pretend: 6, funny: 3 } },
            { text: "发泄", score: { crazy: 7, weird: 5, pretend: 3, funny: 6 } },
            { text: "沉默", score: { crazy: 4, weird: 4, pretend: 5, funny: 4 } },
            { text: "搞破坏", score: { crazy: 9, weird: 7, pretend: 2, funny: 7 } }
        ]
    },
    {
        text: "你认为最有趣的事情是？",
        options: [
            { text: "学习新东西", score: { crazy: 4, weird: 3, pretend: 5, funny: 4 } },
            { text: "冒险", score: { crazy: 8, weird: 6, pretend: 4, funny: 7 } },
            { text: "和朋友聚会", score: { crazy: 5, weird: 3, pretend: 6, funny: 8 } },
            { text: "做实验", score: { crazy: 7, weird: 8, pretend: 3, funny: 5 } }
        ]
    },
    {
        text: "如果可以拥有一个超能力，你会选择？",
        options: [
            { text: "治愈能力", score: { crazy: 3, weird: 2, pretend: 6, funny: 4 } },
            { text: "控制时间", score: { crazy: 8, weird: 7, pretend: 5, funny: 6 } },
            { text: "控制天气", score: { crazy: 7, weird: 6, pretend: 4, funny: 7 } },
            { text: "变成动物", score: { crazy: 6, weird: 8, pretend: 3, funny: 8 } }
        ]
    },
    {
        text: "你认为最好的睡眠姿势是？",
        options: [
            { text: "仰卧", score: { crazy: 3, weird: 2, pretend: 4, funny: 3 } },
            { text: "侧卧", score: { crazy: 4, weird: 3, pretend: 5, funny: 4 } },
            { text: "俯卧", score: { crazy: 5, weird: 4, pretend: 3, funny: 5 } },
            { text: "倒立", score: { crazy: 9, weird: 9, pretend: 2, funny: 8 } }
        ]
    }
];

// 人格类型
const personalities = [
    {
        name: "混沌破坏者",
        code: "CHAO",
        emoji: "💥",
        description: "你是一个充满混沌能量的破坏者，喜欢打破常规，挑战权威。你不按常理出牌，总是能想出让人意想不到的点子。你的存在就是为了颠覆传统，创造新的可能性。",
        minScores: { crazy: 7, weird: 6, pretend: 3, funny: 5 }
    },
    {
        name: "猎奇探险家",
        code: "LIQI",
        emoji: "🧗",
        description: "你是一个天生的探险家，对未知充满好奇。你喜欢探索各种奇怪的事物，尝试别人不敢做的事情。你的人生就是一场永不停歇的冒险，永远在寻找新的刺激。",
        minScores: { crazy: 6, weird: 8, pretend: 4, funny: 6 }
    },
    {
        name: "装逼大师",
        code: "ZHUANG",
        emoji: "🕶️",
        description: "你是一个装逼界的大师，总是能在各种场合展现自己的优越感。你注重形象，喜欢被别人崇拜的感觉。你的人生格言是：不装逼，毋宁死。",
        minScores: { crazy: 4, weird: 3, pretend: 8, funny: 4 }
    },
    {
        name: "搞怪天才",
        code: "GAOGUAI",
        emoji: "🤡",
        description: "你是一个天生的搞怪天才，总能用幽默化解尴尬。你喜欢逗别人开心，自己也充满快乐。你的存在让周围的世界变得更加有趣。",
        minScores: { crazy: 5, weird: 5, pretend: 3, funny: 9 }
    },
    {
        name: "黑暗巫师",
        code: "HEIAN",
        emoji: "🧙",
        description: "你是一个神秘的黑暗巫师，喜欢独处，思考一些别人无法理解的问题。你有着独特的世界观，不被世俗所束缚。你的存在本身就是一个谜。",
        minScores: { crazy: 6, weird: 7, pretend: 5, funny: 3 }
    },
    {
        name: "派对动物",
        code: "PARTY",
        emoji: "🎉",
        description: "你是一个天生的派对动物，喜欢热闹的场合，善于社交。你能让任何聚会变得更加有趣，是朋友们眼中的开心果。你的人生就是一场盛大的派对。",
        minScores: { crazy: 7, weird: 4, pretend: 5, funny: 8 }
    },
    {
        name: "理性怪胎",
        code: "LIXING",
        emoji: "🤖",
        description: "你是一个理性的怪胎，喜欢用逻辑和科学解释一切。你有着独特的思维方式，总是能看到别人看不到的细节。你的存在让世界变得更加理性。",
        minScores: { crazy: 3, weird: 6, pretend: 4, funny: 4 }
    },
    {
        name: "情感炸弹",
        code: "QINGGAN",
        emoji: "💣",
        description: "你是一个情感丰富的炸弹，情绪波动大，充满激情。你对生活充满热爱，同时也容易受到伤害。你的存在让世界变得更加多彩。",
        minScores: { crazy: 8, weird: 5, pretend: 4, funny: 6 }
    },
    {
        name: "神秘主义者",
        code: "SHENMI",
        emoji: "🔮",
        description: "你是一个神秘主义者，对超自然现象充满兴趣。你相信命运和缘分，喜欢探索宇宙的奥秘。你的存在让世界变得更加神秘。",
        minScores: { crazy: 5, weird: 8, pretend: 6, funny: 3 }
    },
    {
        name: "享乐主义者",
        code: "XIANGLE",
        emoji: "🍷",
        description: "你是一个享乐主义者，喜欢享受生活的每一刻。你注重物质和精神的双重享受，认为人生短暂，应该及时行乐。你的存在让世界变得更加美好。",
        minScores: { crazy: 6, weird: 4, pretend: 7, funny: 7 }
    },
    {
        name: "叛逆者",
        code: "PANN",
        emoji: "🤘",
        description: "你是一个天生的叛逆者，不喜欢被规则束缚。你总是挑战权威，追求自由。你的存在让世界变得更加多元。",
        minScores: { crazy: 9, weird: 6, pretend: 2, funny: 6 }
    },
    {
        name: "梦想家",
        code: "MENGXIANG",
        emoji: "🌈",
        description: "你是一个梦想家，有着丰富的想象力。你总是能想出各种奇妙的点子，对未来充满希望。你的存在让世界变得更加有希望。",
        minScores: { crazy: 6, weird: 7, pretend: 5, funny: 7 }
    },
    {
        name: "现实主义者",
        code: "XIANSHI",
        emoji: "💼",
        description: "你是一个现实主义者，注重实际，脚踏实地。你相信通过努力可以改变命运，不喜欢空想。你的存在让世界变得更加真实。",
        minScores: { crazy: 3, weird: 2, pretend: 6, funny: 4 }
    },
    {
        name: "艺术家",
        code: "YISHU",
        emoji: "🎨",
        description: "你是一个艺术家，有着独特的审美和创造力。你喜欢表达自己的情感，通过各种形式创造美。你的存在让世界变得更加美丽。",
        minScores: { crazy: 5, weird: 7, pretend: 6, funny: 5 }
    },
    {
        name: "冒险家",
        code: "MAOXIAN",
        emoji: "🏕️",
        description: "你是一个冒险家，喜欢挑战自我，探索未知。你不害怕困难，总是能在困境中找到出路。你的存在让世界变得更加刺激。",
        minScores: { crazy: 8, weird: 5, pretend: 4, funny: 6 }
    }
];

// 全局变量
let currentQuestion = 0;
let answers = [];
let scores = { crazy: 0, weird: 0, pretend: 0, funny: 0 };

// DOM元素
const welcomeScreen = document.getElementById('welcome');
const testScreen = document.getElementById('test');
const resultScreen = document.getElementById('result');
const startTestBtn = document.getElementById('start-test');
const restartTestBtn = document.getElementById('restart-test');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const progress = document.getElementById('progress');
const personalityName = document.getElementById('personality-name');
const personalityImage = document.getElementById('personality-image');
const personalityDescription = document.getElementById('personality-description');
const crazyScore = document.getElementById('crazy-score');
const weirdScore = document.getElementById('weird-score');
const pretendScore = document.getElementById('pretend-score');
const funnyScore = document.getElementById('funny-score');
const crazyValue = document.getElementById('crazy-value');
const weirdValue = document.getElementById('weird-value');
const pretendValue = document.getElementById('pretend-value');
const funnyValue = document.getElementById('funny-value');

// 初始化
function init() {
    startTestBtn.addEventListener('click', startTest);
    restartTestBtn.addEventListener('click', restartTest);
    prevBtn.addEventListener('click', prevQuestion);
    nextBtn.addEventListener('click', nextQuestion);
}

// 开始测试
function startTest() {
    welcomeScreen.style.display = 'none';
    testScreen.style.display = 'block';
    loadQuestion(0);
}

// 加载问题
function loadQuestion(index) {
    const question = questions[index];
    questionNumber.textContent = `问题 ${index + 1}/50`;
    questionText.textContent = question.text;
    
    optionsContainer.innerHTML = '';
    question.options.forEach((option, i) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        if (answers[index] === i) {
            optionElement.classList.add('selected');
        }
        optionElement.textContent = option.text;
        optionElement.addEventListener('click', () => selectOption(i));
        optionsContainer.appendChild(optionElement);
    });
    
    // 更新进度条
    progress.style.width = `${((index + 1) / questions.length) * 100}%`;
    
    // 更新导航按钮状态
    prevBtn.disabled = index === 0;
    nextBtn.textContent = index === questions.length - 1 ? '提交' : '下一题';
}

// 选择选项
function selectOption(index) {
    answers[currentQuestion] = index;
    loadQuestion(currentQuestion);
}

// 上一题
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

// 下一题
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    } else {
        calculateResult();
    }
}

// 计算结果
function calculateResult() {
    // 重置分数
    scores = { crazy: 0, weird: 0, pretend: 0, funny: 0 };
    
    // 计算总分
    answers.forEach((answer, index) => {
        if (answer !== undefined) {
            const option = questions[index].options[answer];
            scores.crazy += option.score.crazy;
            scores.weird += option.score.weird;
            scores.pretend += option.score.pretend;
            scores.funny += option.score.funny;
        }
    });
    
    // 计算百分比
    const maxScore = questions.length * 9; // 每道题最高9分
    const crazyPercent = Math.round((scores.crazy / maxScore) * 100);
    const weirdPercent = Math.round((scores.weird / maxScore) * 100);
    const pretendPercent = Math.round((scores.pretend / maxScore) * 100);
    const funnyPercent = Math.round((scores.funny / maxScore) * 100);
    
    // 匹配人格类型
    let matchedPersonality = personalities[0]; // 默认第一个
    let maxMatchScore = 0;
    
    personalities.forEach(personality => {
        let matchScore = 0;
        if (scores.crazy >= personality.minScores.crazy) matchScore++;
        if (scores.weird >= personality.minScores.weird) matchScore++;
        if (scores.pretend >= personality.minScores.pretend) matchScore++;
        if (scores.funny >= personality.minScores.funny) matchScore++;
        
        if (matchScore > maxMatchScore) {
            maxMatchScore = matchScore;
            matchedPersonality = personality;
        }
    });
    
    // 显示结果
    testScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    
    personalityName.textContent = matchedPersonality.name;
    personalityImage.textContent = matchedPersonality.emoji;
    personalityDescription.textContent = matchedPersonality.description;
    
    // 显示评分
    crazyScore.style.width = `${crazyPercent}%`;
    weirdScore.style.width = `${weirdPercent}%`;
    pretendScore.style.width = `${pretendPercent}%`;
    funnyScore.style.width = `${funnyPercent}%`;
    
    crazyValue.textContent = crazyPercent;
    weirdValue.textContent = weirdPercent;
    pretendValue.textContent = pretendPercent;
    funnyValue.textContent = funnyPercent;
}

// 重新测试
function restartTest() {
    currentQuestion = 0;
    answers = [];
    scores = { crazy: 0, weird: 0, pretend: 0, funny: 0 };
    resultScreen.style.display = 'none';
    welcomeScreen.style.display = 'block';
}

// 初始化
init();
