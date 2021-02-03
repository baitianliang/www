<template>
    <div class="l-footer">
        <div class="footer-top">
            <div class="clo">
                <p class="title">关于我们</p>
                <div class="title-line"></div>
                <p class="title-link">公司简介</p>
                <p class="title-link">联系我们</p>
                <p class="title-link">用户协议</p>
                <p class="title-link">友情链接</p>
                <p class="title-link">运营合作</p>
            </div>
            <div class="clo">
                <p class="title">运营合作</p>
                <div class="title-line"></div>
                <p class="title-link">卓启科技</p>
                <p class="title-link">中国电信</p>
                <p class="title-link">天翼云</p>
            </div>
            <div class="clo">
                <p class="title">合作伙伴</p>
                <div class="title-line"></div>
                <p class="title-link">中央音乐学院</p>
                <p class="title-link">中国音乐学院</p>
                <p class="title-link">星海音乐学院</p>
                <p class="title-link">西安音乐学院</p>
                <p class="title-link">四川音乐学院</p>
            </div>
            <div class="clo">
                <p class="title">联系我们</p>
                <div class="title-line"></div>
                <p class="title-link relation">地址：北京市朝阳区华严北里八号院物业办公楼二层</p>
                <p class="title-link">联系电话：13366730106</p>
            </div>
            <div class="clo">
                <p class="title">邮箱</p>
                <div class="title-line"></div>
                <p class="title-link">客服支持：service@yueda123.com</p>
                <p class="title-link">市场推广：market@yueda123.com</p>
                <p class="title-link">商务合作：business@yueda123.com</p>
                <p class="title-link">意见反馈：operation@yueda123.com</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>Copyright2016--2025 Mtusicdp, 1nc. All rights reserved</p>
            <div class="backcolor-text">
                <p>京ICP备19009240号-1 京公网安备1101002028411号</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.l-footer {
    .footer-top {
        // width: 80%;
        padding: 20px 16%;
        background-color: #F6F4FF;
        display: flex;
        justify-content: space-between;
        .clo {
            width: 20%;
            color: #534698;
            .title {
                font-size: 20px;
            }
            .title-line {
                width: 30px;
                border-bottom: 1px solid #534698;
                margin-bottom: 10px;
            }
            .title-link {
                font-size: 13px;
            }
        }
        .relation {
            padding-right: 40px;
        }
    }
    .footer-bottom {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #534698;
        color: white;
        padding: 20px;
        .backcolor-text {
            background-color: #FF6600;
            width: 340px;
            height: 20px;
            text-align: center;
        }
    }
}
</style>