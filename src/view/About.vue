<template>
    <div class="about">
        <l-carousel></l-carousel>
        <div class="about-content">
            <div class="company-synopsis">公司简介</div>
            <div class="about-title">中国首个钢琴专家视频点评平台</div>
            <i class="el-icon-arrow-down text-icon"></i>
            <div class="company-text">{{message1}}</div>
            <div class="company-text">{{message2}}</div>
            <!-- <img src="" alt=""> -->
            <div style="width: 100%; height: 600px; background-color: #666666;margin: 20px 0px"></div>
            <div class="company-text">{{message3}}</div>
            <div class="company-synopsis">联系我们</div>
            <div style="width: 100%; height: 700px; background-color: #666666;margin: 20px 0px"></div>
            <div class="about-title">名称：北京朝阳区洛美博艺钢琴艺术培训学校</div>
            <div class="about-title">地址：北京朝阳区华严北里八号院物业办公室二楼</div>
            <div class="about-title">联系电话：13366730106</div>
            <div class="about-title">联系人：闫女士</div>
            <div class="about-mailbox">
                <div class="about-mailbox-title">客服支持</div>
                <div class="about-mailbox-content">→service@yueda123.com</div>
            </div>
            <div class="about-mailbox">
                <div class="about-mailbox-title">市场推广</div>
                <div class="about-mailbox-content">→market@yueda123.com</div>
            </div>
            <div class="about-mailbox">
                <div class="about-mailbox-title">商务合作</div>
                <div class="about-mailbox-content">→business@yueda123.com</div>
            </div>
            <div class="about-mailbox">
                <div class="about-mailbox-title">意见反馈</div>
                <div class="about-mailbox-content">→operation@yueda123.com</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message1: "乐达在线是旗下设立的一个整合全球艺术名师资源，解决当前艺术教育痛点，提升全名艺术素质的生态教育平台。",
            message2: "我们致力搭建了国内最先进最专业的艺术教育平台，完成了网络教育视频点评教学。平台迅速聚集了国内外大批顶级艺术大师。学员上传自己的演奏视频，通过网络向专家发出点评申请，专家可以随时随地通过网络进行点评。彻底打破时间、空间的限制，让学员与专家大师零距离接触。平台采用点评、录课、直播等方式让艺术大师的教学成果能够让全国乃至全世界的学生受益，同时对普通教师的日常教学产生积极有效的指导作用，全面提升行业教学水平。",
            message3: "艺术教育的痛点在于名师资源的稀缺性，乐达在线解决了这个问题，讲名师的脆片时间有效加以利用，让每一位怀揣艺术梦的人都可以享受来自全球的顶级大师的指导。",
        }
    }
}
</script>

<style lang="scss" scoped>
.about {
    margin-bottom: 60px;
    .about-content {
        width: 70%;
        margin: 40px 15%;
        text-align: center;
        .company-synopsis {
            margin-top: 40px;
            font-size: 40px;
            letter-spacing: 10px;
            font-weight: bold;
            color: #FF6505;
        }
        .about-title {
            margin-top: 10px;
            font-size: 20px;
            letter-spacing: 2px;
            font-weight: bold;
            color: #534698;
        }
        .text-icon {
            margin-top: 0px;
            margin-bottom: 20px;
            color: #534698;
            font-size: 70px;
            font-weight: bold;
        }
        .company-text {
            text-align: left;
            font-size: 15px;
            letter-spacing: 1px;
            color: #534698;
            text-indent: 30px
        }
        .about-mailbox {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            font-size: 16px;
            .about-mailbox-title {
                color: #FF6505;
                font-weight: bold;
            }
            .about-mailbox-content {
                color: #534698;
            }
        }
    }
}
</style>