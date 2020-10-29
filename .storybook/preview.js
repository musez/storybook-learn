// .storybook/config.js
import { configure, addDecorator, addParameters } from '@storybook/vue'
// UI framework
import Vue from 'vue'
// knobs
import { withKnobs } from '@storybook/addon-knobs'
// readme
import { addReadme } from 'storybook-readme/vue'
import { themes, create } from '@storybook/theming'

const basicTheme = create({
    base: 'light',
    brandTitle: 'README addon',
    brandUrl: 'https://github.com/tuchk4/storybook-readme',
    brandImage: null
})

addParameters({
    options: {
        showPanel: true,
        panelPosition: 'right',
        theme: basicTheme
        // theme: themes.dark,
    },
    readme: { codeTheme: 'github' }
})

addDecorator(withKnobs)
addDecorator(addReadme)

configure(require.context('./../stories', true, /\.stories\.js$/), module)
