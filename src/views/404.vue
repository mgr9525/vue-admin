<template>
<div class="mainDiv">
    <p class="page-container">404 page not found</p>
    <p class="page-container">网页未找到</p>
    <p><el-button type="text" @click="$router.push('/')">返回首页</el-button></p>
</div>
</template>

<style lang="scss" scoped>
.mainDiv{
    margin-top: 50px;
    text-align: center;
}
    .page-container {
        font-size: 20px;
        text-align: center;
        color:#f06;
    }
</style>