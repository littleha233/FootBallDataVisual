
$(function(){


  init();

})
function init(){



  var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];

  //各医院门诊人次
  var histogramChart1 = echarts.init(document.getElementById('histogramChart1'));
  histogramChart1.setOption({

     grid: {
         top: '20%',
         left: '32%'
     },
     xAxis: {
         show: false
     },
     yAxis: [{
         show: true,
         data:  ['巴萨','皇马','马竞','瓦伦',],
         inverse: true,
         axisLine: {
             show: false
         },
         splitLine: {
             show: false
         },
         axisTick: {
             show: false
         },
         axisLabel: {
             color: '#fff',
             formatter: (value, index) => {
                 return [

                     `{lg|${index+1}}  ` + '{title|' + value + '} '
                 ].join('\n')
             },
             rich: {
                 lg: {
                     backgroundColor: '#339911',
                     color: '#fff',
                     borderRadius: 15,
                     // padding: 5,
                     align: 'center',
                     width: 15,
                     height: 15
                 },
             }
         },


     }, {
         show: true,
         inverse: true,
         data: [4000, 3000, 2000, 1000],
         axisLabel: {
             textStyle: {
                 fontSize: 12,
                 color: '#fff',
             },
         },
         axisLine: {
             show: false
         },
         splitLine: {
             show: false
         },
         axisTick: {
             show: false
         },

     }],
     series: [{
         name: '条',
         type: 'bar',
         yAxisIndex: 0,
         data: [40, 40, 40, 39],
         barWidth: 10,
         itemStyle: {
             normal: {
                 barBorderRadius: 20,
                 color: function(params) {
                     var num = myColor.length;
                     return myColor[params.dataIndex % num]
                 },
             }
         },
         label: {
             normal: {
                 show: true,
                 position: 'inside',
                 formatter: '{c}%'
             }
         },
     }, {
         name: '框',
         type: 'bar',
         yAxisIndex: 1,
         barGap: '-100%',
         data: [100, 100, 100, 100],
         barWidth: 15,
         itemStyle: {
             normal: {
                 color: 'none',
                 borderColor: '#00c1de',
                 borderWidth: 3,
                 barBorderRadius: 15,
             }
         }
     }, ]
  })

  //各医院住院人次
  var histogramChart2 = echarts.init(document.getElementById('histogramChart2'));
  histogramChart2.setOption({

     grid: {
         top: '20%',
         left: '32%'
     },
     xAxis: {
         show: false
     },
     yAxis: [{
         show: true,
         data:  ['巴萨','皇马','马竞','瓦伦',],
         inverse: true,
         axisLine: {
             show: false
         },
         splitLine: {
             show: false
         },
         axisTick: {
             show: false
         },
         axisLabel: {
             color: '#fff',
             formatter: (value, index) => {
                 return [

                     `{lg|${index+1}}  ` + '{title|' + value + '} '
                 ].join('\n')
             },
             rich: {
                 lg: {
                     backgroundColor: '#339911',
                     color: '#fff',
                     borderRadius: 15,
                     // padding: 5,
                     align: 'center',
                     width: 15,
                     height: 15
                 },
             }
         },


     }, {
         show: true,
         inverse: true,
         data: [1080,100, 100, 100],
         axisLabel: {
             textStyle: {
                 fontSize: 12,
                 color: '#fff',
             },
         },
         axisLine: {
             show: false
         },
         splitLine: {
             show: false
         },
         axisTick: {
             show: false
         },

     }],
     series: [{
         name: '条',
         type: 'bar',
         yAxisIndex: 0,
         data:  [88, 84, 86, 78],
         barWidth: 10,
         itemStyle: {
             normal: {
                 barBorderRadius: 20,
                 color: function(params) {
                     var num = myColor.length;
                     return myColor[params.dataIndex % num]
                 },
             }
         },
         label: {
             normal: {
                 show: true,
                 position: 'inside',
                 formatter: '{c}%'
             }
         },
     }, {
         name: '框',
         type: 'bar',
         yAxisIndex: 1,
         barGap: '-100%',
         data: [100, 100, 100, 100],
         barWidth: 15,
         itemStyle: {
             normal: {
                 color: 'none',
                 borderColor: '#00c1de',
                 borderWidth: 3,
                 barBorderRadius: 15,
             }
         }
     }, ]
  })

    //手术工作量
    var pieChart1 = echarts.init(document.getElementById('pieChart1'));
    pieChart1.setOption({
      color:["#87cefa","#ff7f50","#32cd32","#da70d6",],
      tooltip : {
       trigger: 'item',
       formatter: "{a}<br/>{b}<br/>{c}"
      },
      calculable : true,
      series : [
          {
              name:'',
              type:'pie',
              radius : [30, 110],
              center : ['50%', '50%'],
              roseType : 'area',
              x: '50%',
              max: 40,
              sort : 'ascending',
              data:[
                  {value:30, name:'巴萨'},
                  {value:25, name:'皇马'},
                  {value:25, name:'马竞'},
                  {value:20, name:'其他'},
              ]
          }
      ]
    })

    var lineChart1 = echarts.init(document.getElementById('lineChart1'));
    lineChart1.setOption( {
      color:["#87cefa","#ff7f50","#32cd32","#da70d6",],
      tooltip : {
           trigger: 'item',
           formatter: "{a}<br/>{b}<br/>{c}M"
       },
       legend: {
        data:['巴萨','皇马','马竞','瓦伦',],
        y: 'bottom',
        x:'center',
        textStyle:{
            color:'#fff',
            fontSize:12
        }
      },
      grid:{
        left: '5%',
        right: '5%',
        bottom: '10%',
        containLabel: true
      },
      calculable : true,
      xAxis : [
          {
              type : 'category',
              boundaryGap : false,
              data : ['一月','二月','三月','四月','五月','六月','七月'],
              axisLine:{
                   lineStyle:{
                       color: '#87cefa'
                   },
               },
               axisLabel : {
                 interval:0,
                 rotate:40,

                   textStyle: {
                       color: '#fff',
                       fontSize:13
                   }
               }
          }
      ],
      yAxis : [
          {
              type : 'value',
              axisLine:{
                  lineStyle:{
                      color: '#87cefa'
                  },
              },
              splitLine: {
                  "show": false
              },
              axisLabel: {
                  textStyle: {
                      color: '#fff'
                  },
                  formatter: function (value) {
                      return value + "M"
                  },
              },
          }
      ],
      series : [
          {
              name:'巴萨',
              type:'line',
              smooth:true,
              itemStyle: {normal: {areaStyle: {type: 'default'}}},
              data:[10, 12, 21, 54, 260, 830, 710]
          },
          {
              name:'皇马',
              type:'line',
              smooth:true,
              itemStyle: {normal: {areaStyle: {type: 'default'}}},
              data:[30, 182, 434, 791, 390, 30, 10]
          },
          {
              name:'马竞',
              type:'line',
              smooth:true,
              itemStyle: {normal: {areaStyle: {type: 'default'}}},
              data:[1320, 1132, 601, 234, 120, 90, 20]
          },
          {
              name:'瓦伦',
              type:'line',
              smooth:true,
              itemStyle: {normal: {areaStyle: {type: 'default'}}},
              data:[320, 132, 61, 34, 20, 9, 2]
          }
      ]

    })

    //体检人次
    var lineChart2 = echarts.init(document.getElementById('lineChart2'));
    lineChart2.setOption( {
      color:["#87cefa","#ff7f50","#32cd32","#da70d6",],
      tooltip : {
           trigger: 'item',
           formatter: "{a}<br/>{b}<br/>{c}人"
       },
       legend: {
        data:['巴萨','皇马','马竞','瓦伦',],
        y: 'bottom',
        x:'center',
        textStyle:{
            color:'#fff',
            fontSize:12
        }
      },
      grid:{
        left: '5%',
        right: '5%',
        bottom: '10%',
        containLabel: true
      },
      calculable : true,
      xAxis : [
          {
              type : 'category',
              boundaryGap : false,
              data : ['一','二','三','四','五','六','七'],
              axisLine:{
                   lineStyle:{
                       color: '#87cefa'
                   },
               },
               axisLabel : {
                 interval:0,
                 rotate:40,

                   textStyle: {
                       color: '#fff',
                       fontSize:13
                   }
               }
          }
      ],
      yAxis : [
          {
              type : 'value',
              axisLine:{
                  lineStyle:{
                      color: '#87cefa'
                  },
              },
              splitLine: {
                  "show": false
              },
              axisLabel: {
                  textStyle: {
                      color: '#fff'
                  },
                  formatter: function (value) {
                      return value + "人"
                  },
              },
          }
      ],
      series : [
          {
              name:'巴萨',
              type:'line',
              smooth:true,
              itemStyle: {normal: {areaStyle: {type: 'default'}}},
              data:[120, 122, 221, 524, 460, 530, 610]
          },
          {
              name:'皇马',
              type:'line',
              smooth:true,
              itemStyle: {normal: {areaStyle: {type: 'default'}}},
              data:[130, 682, 534, 691, 490, 130, 110]
          },
          {
              name:'马竞',
              type:'line',
              smooth:true,
              itemStyle: {normal: {areaStyle: {type: 'default'}}},
              data:[320, 132, 161, 134, 112, 190, 120]
          },
          {
              name:'瓦伦',
              type:'line',
              smooth:true,
              itemStyle: {normal: {areaStyle: {type: 'default'}}},
              data:[320, 132, 461, 34, 202, 93, 222]
          }
      ]

    })

    //床位数量分布
    var pieChart2 = echarts.init(document.getElementById('pieChart2'));
    pieChart2.setOption({
      color:["#87cefa","#ff7f50","#32cd32","#da70d6",],
      tooltip : {
       trigger: 'item',
       formatter: "{a}<br/>{b}<br/>{c}"
      },
      calculable : true,
      series : [
          {
              name:'',
              type:'pie',
              radius : [30, 110],
              center : ['45%', '50%'],
              roseType : 'area',
              x: '50%',
              max: 40,
              sort : 'ascending',
              data:[
                  {value:700, name:'巴萨'},
                  {value:500, name:'皇马'},
                  {value:105, name:'马竞'},
                  {value:250, name:'瓦伦'},
              ]
          }
      ]
    })

    //药占比
    var histogramChart3 = echarts.init(document.getElementById('histogramChart3'));
    histogramChart3.setOption( {

      color:['#87cefa'],
      grid:{
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
      },
      tooltip : {
         trigger: 'item',
         formatter: "{a}<br/>{b}<br/>{c}"
     },
      calculable : true,
      xAxis : [
          {
              type : 'category',
              data : ['巴萨','皇马','马竞','瓦伦',],
              axisLine:{
                   lineStyle:{
                       color: '#87cefa'
                   },
               },
               axisLabel : {
                 interval:0,
                 rotate:40,

                   textStyle: {
                       color: '#fff',
                       fontSize:13
                   }
               }
          }
      ],
      yAxis : [
          {
              type : 'value',
              axisLine:{
                  lineStyle:{
                      color: '#87cefa'
                  },
              },
              splitLine: {
                  "show": false
              },
              axisLabel: {
                  textStyle: {
                      color: '#fff'
                  },
                  formatter: function (value) {
                      return value + ""
                  },
              },
          }
      ],
      series : [
          {
              name:'进球数',
              type:'bar',
              barWidth:30,
              data:[5,3,2,3],
          },
      ]
    });


    var histogramChart4 = echarts.init(document.getElementById('histogramChart4'));
    histogramChart4.setOption( {
      color:['#87cefa'],
      grid:{
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
      },
      tooltip : {
         trigger: 'item',
         formatter: "{a}<br/>{b}<br/>{c}M"
     },
      calculable : true,
      xAxis : [
          {
              type : 'category',
              data : ['巴萨','皇马','马竞','瓦伦',],
              axisLine:{
                   lineStyle:{
                       color: '#87cefa'
                   },
               },
               axisLabel : {
                 interval:0,
                 rotate:40,

                   textStyle: {
                       color: '#fff',
                       fontSize:13
                   }
               }
          }
      ],
      yAxis : [
          {
              type : 'value',
              axisLine:{
                  lineStyle:{
                      color: '#87cefa'
                  },
              },
              splitLine: {
                  "show": false
              },
              axisLabel: {
                  textStyle: {
                      color: '#fff'
                  },
                  formatter: function (value) {
                      return value + "M"
                  },
              },
          }
      ],
      series : [
          {
              name:'视频点击量',
              type:'bar',
              barWidth:30,
              data:[30,23,15,17],
          },
      ]
    });

}
