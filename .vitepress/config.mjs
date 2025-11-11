/*
 * @Author: 中二的开心愚者 3105821798@qq.com
 * @Date: 2025-11-11 21:13:49
 * @LastEditors: 中二的开心愚者 3105821798@qq.com
 * @LastEditTime: 2025-11-11 21:25:40
 * @FilePath: \vitepress\docsDemo\.vitepress\config.mjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "一个起点",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { 
        text: '家', items: [
          { text: '首页', link: '/' },
          { text: 'markdown示例', link: '/markdown-examples' }
        ]
       },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present <a href="https://github.com/vuejs/vitepress">VitePress</a>'
    }
  }
})
