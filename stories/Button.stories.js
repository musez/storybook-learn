import Vue from 'vue';
import {storiesOf} from '@storybook/vue';
import vButton from '../src/components/VButton/index.vue';
import {withKnobs, number, object, boolean, text, select, date, array, color} from '@storybook/addon-knobs';

import Readme from '@/components/VButton/index.md'

storiesOf('vButton', module)
    .addDecorator(withKnobs)
    .addParameters({
        readme: {
            // Show readme before story
            // content: JrUploadReadme,
            // Show readme at the addons panel
            sidebar: Readme
        }
    })
    .add('default', () => ({
        components: {vButton},
        template: '<v-button>default</v-button>',
    }))
    .add('primary', () => ({
        components: {vButton},
        template: '<v-button type="primary">primary</v-button>',
    }))
    .add('danger', () => ({
        components: {vButton},
        template: '<v-button type="danger">danger</v-button>',
    }))
    .add('diy', () => {
        const btnText = text('btnText', 'DIY Button'); //文字控件
        const bold = boolean('Bold', false) //启用控件
        const selectedBgColor = color('bgColor', '#fff');//颜色选择器
        const selectedColor = color('Color', 'black');
        const fontSize = number('fontSize', 20)//数字
        const customStyle = object('Style', {
            fontFamily: 'Arial',
            padding: "20px",
        });
        const style = {
            ...customStyle,
            fontWeight: bold ? 800 : 400,
            fontSize: fontSize + 'px',
            color: selectedColor,
            backgroundColor: selectedBgColor
        };
        return {
            components: {vButton},
            props: {
                btnText: {
                    default: btnText
                },
                style: {
                    default: style
                }
            },
            template: '<v-button :style="style">{{btnText}}</v-button>'
        }
    })
