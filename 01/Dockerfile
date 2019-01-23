# 指定基础镜像是node 版本10.5.0

FROM node:10.5

WORKDIR /app
COPY . /app

# 安装依赖项目
RUN npm install

#容器对外暴露的端口号
EXPOSE 3000
CMD npm run dev