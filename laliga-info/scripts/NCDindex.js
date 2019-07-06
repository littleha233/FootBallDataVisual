var symptomName = last_month_day();

$(function(){


  init();

})
function init(){
  //地图
  var mapChart = echarts.init(document.getElementById('mapChart'));
  mapChart.setOption({
      bmap: {
          center: [0.060606,41.72323],
          zoom: 12,
          roam: true,

      },
      tooltip : {
          trigger: 'item',
          formatter:function(params, ticket, callback){
              return params.value[2]
          }
      },
      series: [{
          type: 'scatter',
          coordinateSystem: 'bmap',
          data: [
            [118.096435, 24.485408, '西班牙'] ,
            [118.094564, 24.457358, '巴塞罗那'] ,
            [118.104103, 24.477761, '马德里'],
            [118.14748, 24.506295, '塞维利亚'],
            [118.254841, 24.665349, '马拉加'],
           ]
      }]
  });
  mapChart.on('click', function (params) {
    console.log(params.value[2])
  });

  var bmap = mapChart.getModel().getComponent('bmap').getBMap()
  bmap.addControl(new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP,BMAP_SATELLITE_MAP ]}));
  bmap.setMapStyle({style:'midnight'})


  var pieChart = echarts.init(document.getElementById('pieChart'));
  pieChart.setOption({

    color:["#87cefa","#ff7f50","#32cd32","#da70d6","#FD6C88"],

    legend: {
        y : '260',
        x : 'center',
        textStyle : {
            color : '#ffffff',

        },
         data : ['西甲','德甲','英超','意甲','法甲'],
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b}<br/>{c}({d}%)"
    },
    calculable : false,
    series : [
        {
            name:'综合实力',
            type:'pie',
            radius : ['40%', '70%'],
            center : ['50%', '45%'],
            itemStyle : {
                normal : {
                    label : {
                        show : false
                    },
                    labelLine : {
                        show : false
                    }
                },
                emphasis : {
                    label : {
                        show : true,
                        position : 'center',
                        textStyle : {
                            fontSize : '20',
                            fontWeight : 'bold'
                        }
                    }
                }
            },
            data:[
                {value:335, name:'西甲'},
                {value:310, name:'德甲'},
                {value:234, name:'英超'},
                {value:135, name:'意甲'},
				{value:235, name:'法甲'}
            ]
        }
    ]
    });


    var lineChart = echarts.init(document.getElementById('lineChart'));
    lineChart.setOption({

      color:["#87cefa","#ff7f50","#32cd32","#da70d6",],
      legend: {
          y : '260',
          x : 'center',
          textStyle : {
              color : '#ffffff',

          },
           data : ['非洲','美洲','欧洲','亚洲',],
      },
      calculable : false,
      tooltip : {
          trigger: 'item',
          formatter: "{a}<br/>{b}<br/>{c}"
      },
      yAxis: [
            {
                type: 'value',
                axisLine : {onZero: false},
                axisLine:{
                    lineStyle:{
                        color: '#034c6a'
                    },
                },

                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + "M"
                    },
                },
                splitLine:{
                    lineStyle:{
                        width:0,
                        type:'solid'
                    }
                }
            }
        ],
        xAxis: [
            {
                type: 'category',
                data : ['12','13','14','15','16','17','18','19',],
                axisLine:{
                    lineStyle:{
                        color: '#034c6a'
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
                splitLine:{
                    lineStyle:{
                        width:0,
                        type:'solid'
                    }
                },
            }
        ],
        grid:{
                left: '5%',
                right: '5%',
                bottom: '20%',
                containLabel: true
        },
        series : [
          {
              name:'非洲',
              type:'line',
              smooth:true,
              itemStyle: {
                  normal: {
                      lineStyle: {
                          shadowColor : 'rgba(0,0,0,0.4)'
                      }
                  }
              },
              data:[15, 16, 20, 25, 26, 27, 28, 30, 36]
          },
          {
              name:'美洲',
              type:'line',
              smooth:true,
              itemStyle: {
                  normal: {
                      lineStyle: {
                          shadowColor : 'rgba(0,0,0,0.4)'
                      }
                  }
              },
              data:[25, 30, 32, 35, 32, 35, 40, 45, 56]
          },
          {
              name:'欧洲',
              type:'line',
              smooth:true,
              itemStyle: {
                  normal: {
                      lineStyle: {
                          shadowColor : 'rgba(0,0,0,0.4)'
                      }
                  }
              },
              data:[35, 20, 28, 25, 32.1, 35, 50, 55, 66]
          },
          {
              name:'亚洲',
              type:'line',
              smooth:true,
              itemStyle: {
                  normal: {
                      lineStyle: {
                          shadowColor : 'rgba(0,0,0,0.4)'
                      }
                  }
              },
              data:[45, 60, 65, 70, 72.1, 75, 80, 85, 86]
          }
      ]
    });

    var histogramChart = echarts.init(document.getElementById('histogramChart'));
    histogramChart.setOption({

      color:["#87cefa","#ff7f50","#32cd32","#da70d6",],
      legend: {
          y : '250',
          x : 'center',
          data:['前锋', '中场','后场','门将'],
          textStyle : {
              color : '#ffffff',

          }
      },

      calculable :false,


      grid:{
              left: '5%',
              right: '5%',
              bottom: '20%',
              containLabel: true
      },

      tooltip : {
          trigger: 'axis',
          axisPointer : {
              type : 'shadow'
          }
      },

      xAxis : [
          {
              type : 'value',
              axisLabel: {
                  show: true,
                  textStyle: {
                      color: '#fff'
                  }
              },
              splitLine:{
                  lineStyle:{
                      color:['#f2f2f2'],
                      width:0,
                      type:'solid'
                  }
              }

          }
      ],

      yAxis : [
          {
              type : 'category',
              data:['巴萨罗那', '皇家马德里','马德里竞技'],
              axisLabel: {
                  show: true,
                  textStyle: {
                      color: '#fff'
                  }
              },
              splitLine:{
                  lineStyle:{
                      width:0,
                      type:'solid'
                  }
              }
          }
      ],

      series : [
          {
              name:'前锋',
              type:'bar',
              stack: '',
              itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
              data:[320, 302, 301]
          },
          {
              name:'中场',
              type:'bar',
              stack: '',
              itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
              data:[120, 132, 101]
          },
          {
              name:'后场',
              type:'bar',
              stack: '',
              itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
              data:[220, 182, 191]
          },
          {
              name:'门将',
              type:'bar',
              stack: '',
              itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
              data:[150, 212, 201]
          }

      ]
   });

   var lineChart2 = echarts.init(document.getElementById('lineChart2'));
   lineChart2.setOption({

     color:["#87cefa","#ff7f50","#32cd32","#da70d6",],
     legend: {
         y : '260',
         x : 'center',
         textStyle : {
             color : '#ffffff',

         },
          data : ['市场推广','球员宣传','竞技投入','观看投入',],
     },
     calculable : false,
     tooltip : {
         trigger: 'item',
         formatter: "{a}<br/>{b}<br/>{c}条"
     },
     yAxis: [
           {
               type: 'value',
               axisLine : {onZero: false},
               axisLine:{
                   lineStyle:{
                       color: '#034c6a'
                   },
               },

               axisLabel: {
                   textStyle: {
                       color: '#fff'
                   },
                   formatter: function (value) {
                       return value + "条"
                   },
               },
               splitLine:{
                   lineStyle:{
                       width:0,
                       type:'solid'
                   }
               }
           }
       ],
       xAxis: [
           {
               type: 'category',
               data : ['13','14','15','16','17','18'],
               axisLine:{
                   lineStyle:{
                       color: '#034c6a'
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
               splitLine:{
                   lineStyle:{
                       width:0,
                       type:'solid'
                   }
               },
           }
       ],
       grid:{
               left: '5%',
               right: '5%',
               bottom: '20%',
               containLabel: true
       },
       series : [
         {
             name:'市场推广',
             type:'line',
             smooth:true,
             itemStyle: {
                 normal: {
                     lineStyle: {
                         shadowColor : 'rgba(0,0,0,0.4)'
                     }
                 }
             },
             data:[15, 20, 25, 30, 35.1, 40,].reverse()
         },
         {
             name:'球员宣传',
             type:'line',
             smooth:true,
             itemStyle: {
                 normal: {
                     lineStyle: {
                         shadowColor : 'rgba(0,0,0,0.4)'
                     }
                 }
             },
             data:[25, 26, 28, 30, 32, 35, ].reverse()
         },
         {
             name:'竞技投入',
             type:'line',
             smooth:true,
             itemStyle: {
                 normal: {
                     lineStyle: {
                         shadowColor : 'rgba(0,0,0,0.4)'
                     }
                 }
             },
             data:[35, 40, 45, 50, 55, 45, ].reverse()
         },
         {
             name:'观看投入',
             type:'line',
             smooth:true,
             itemStyle: {
                 normal: {
                     lineStyle: {
                         shadowColor : 'rgba(0,0,0,0.4)'
                     }
                 }
             },
             data:[45, 30, 50, 75, 52.1, 55, ].reverse()
         }
     ]
   });

}
