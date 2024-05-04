import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption
} from 'echarts/components';
import { BarChart, BarSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { useEffect } from 'react';

// Register necessary components
echarts.use([TooltipComponent, GridComponent, BarChart, CanvasRenderer]);

const MyEChartsComponent = () => {
  useEffect(() => {
    // Initialize ECharts instance
    const chartDom = document.getElementById('main');
    const myChart = echarts.init(chartDom);

    // Define chart options
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Direct',
          type: 'bar',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220]
        }
      ]
    };

    // Set chart options
    myChart.setOption(option);

    // Dispose chart instance when component unmounts
    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <div id="main" style={{ width: '100%', height: '400px' }}></div>
  );
};

export default MyEChartsComponent;