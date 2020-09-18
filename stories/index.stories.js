/**
 * @name: index.stories.js
 * @author: wy
 * @date: 20200917 18:49
 * @description：index.stories.js
 * @update: 20200917 18:49
 */
import Vue from 'vue';
import MyButton from './Button.js';

export default {title: 'Button'};

export const withText = () => '<my-button>with text</my-button>';

export const withEmoji = () => '<my-button>测试</my-button>';

export const asAComponent = () => ({
    components: {MyButton},
    template: '<my-button :rounded="true">rounded</my-button>'
});
