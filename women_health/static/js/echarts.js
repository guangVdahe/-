var chartDom_1 = document.getElementById('chart_1');
var myChart_1 = echarts.init(chartDom_1);
var option_1;

option_1 = {
    grid: {
        width: 800,
        height: 400,
    },
    tooltip: {
        trigger: 'item',
        formatter: '{c}%'
    },
    xAxis: {
        type: 'category',
        data: [
            '月经症状(如月经周期不规律、痛经)',
            '阴部及白带症状(如白带增多、阴道疼痛)',
            '乳房症状(乳头溢液、乳房有肿块或肿胀)',
            '高雄激素表现症状(如上唇、大腿内测多毛)',
            '以上都没有'
        ],
        axisLabel: {
            rotate: 40
        }
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}.00%'
        }
    },
    series: [
        {
            data: [50.08, 30.2, 20.5, 9.2, 29.9],
            type: 'bar',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#ff9999',
                            fontSize: 16
                        },
                        formatter: '{c}%'
                    }
                }
            },
            barWidth: '30%',
            color: '#f38181'
        }
    ]
};

option_1 && myChart_1.setOption(option_1);


// 第二个图表
var chartDom_2 = document.getElementById('chart_2');
var myChart_2 = echarts.init(chartDom_2);
var option_2;

option_2 = {
    grid: {
        width: 800,
        height: 400,
    },
    tooltip: {
        trigger: 'item',
        formatter: '{c}%'
    },
    xAxis: {
        type: 'category',
        data: [
            '没有妇科疾病',
            '霉菌性阴道炎',
            '乳腺增生',
            '盆腔炎',
            '宫颈炎',
            '多囊卵巢综合征',
            '子宫内膜异位症',
            '其他',
            '子宫肌瘤',
            '乳腺癌',
            '不孕不育'
        ],
        axisLabel: {
            rotate: 40
        }
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}.00%'
        },
        interval: 5
    },
    series: [
        {
            data: [35.6, 23.8, 18.6, 14.2, 13.9, 12.5, 4.9, 3.6, 3.3, 0.7, 0.6],
            type: 'bar',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#ff9999',
                            fontSize: 12
                        },
                        formatter: '{c}0%'
                    }
                }
            },
            barWidth: '30%',
            color: '#f38181'
        }
    ]
};

option_2 && myChart_2.setOption(option_2);
