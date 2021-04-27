## live template 代码简写



**定义原则**

- 越常用，越精简（可设置代码片段在指定文件类型中生效来完成）
  - 比原生IDE 提示， 开源的 plugins react snippets  
    - 写法更精简，符合输入习惯，方便记忆：能短则短
    - 添加自己常用的代码片段：能省则省
- 覆盖全面： 
  - **javascript**
    - function
    - Array
    - console
    - ...
  - **react** 
    - template：
      - component
      - pure component
      - function component
    - 生命周期  (可使用 plugin react snippets 实现)
      - componentDidMount
      - componentWillMount
      - ...
    - api 
      - setState
  - **react-html， react-antd-html**  
    - 快速demo: 
      - 执行速度快：不用通过webpack打包，安装依赖，静态资源存在cdn中，刷新速度快
      - 功能独立：一个文件一个功能，不污染当前开发的项目，快速调试demo
      - 本地IDE：相比在线IDE  codesandbox，codepen
        - 启动速度快：快捷键 alt+ctrl+shift+Insert
        - 方便调试：本地文件方便在线demo
        - 独立demo空间：结合webstorm的scratches and consoles面板，demo文件有独立存储空间，不污染源项目
        - 强大IDE：可享受你当前IDE的各种强大功能
          - live template
          - version control : local history,可通过local history的put label 生成不同版本，更建议通过新建多个文件来实现独立功能
    - 方便分享：
      - 功能独立：每个文件就是一个独立的功能
      - 可在线预览：配合github 静态页面预览功能，不用安装依赖
  - antd / antd mobile /antd pro 





## 原生js类



函数类
- f    
  - fun(){}
- f2   
   - fun(a,()=>{})
- fn
   - %fun%=()=>{}
- fun
   - function fun(){}
- ff
  - (function(){})()




其他
- lg
  - console.log();
- kv   
  - key:value
- lvr   
  - let {value}=result;



判断：if,else,elseif

- if  
  - if(){}
- el  
  - else{}
- ife  
  - if(){}else{}
- eli   
  - else if(){}
- ?   
  - isTrue?a:b
- |     
  - isValue || defaltValue



array

- map
- forEach
- some
- every
- filter



## react 相关


- ss
  - this.setState({key:value})



## html自定义模板 (以下模板只在html文件中生效)
- re: html-react
- ant: html-antd  (react)
- antm: html-antd-mobile  (react)
