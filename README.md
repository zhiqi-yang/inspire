# Node.js 工程快速入门指南

## 1. 什么是 Node.js？
- **JavaScript 运行时**：基于 Chrome V8 引擎，让 JavaScript 可以脱离浏览器运行


## 2. 什么是 npm？
- **Node Package Manager**：Node.js 的官方包管理工具


## 3. npm 包管理机制

### 依赖安装流程
1. 读取 `package.json`
2. 解析依赖树
3. 下载包到缓存
4. 解压到 `node_modules`

### 版本控制符号
| 符号 | 示例 | 说明 |
|------|------|------|
| `^` | `^1.2.3` | 允许次版本更新 (1.x.x) |
| `~` | `~1.2.3` | 只允许补丁更新 (1.2.x) |
| 无 | `1.2.3` | 精确版本 |

### 重要文件
- `package-lock.json`：锁定依赖版本
- `node_modules/`：依赖存储目录

## 4. package.json 核心字段

### scripts
```json
"scripts": {
  "start": "node src/index.js",
  "dev": "cross-env NODE_ENV=development node src/index.js",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

# 项目启动步骤

## 1. 克隆代码仓库
```bash
git clone https://github.com/zhiqi-yang/inspire.git
```


## 2. 进入项目并安装依赖
```bash
cd inspire;
npm install;
```

## 3. 运行node script
```bash
npm run dev;
npm run start;
```