<template>
    <div class="section-container tutorial">
        <div class="section">
            <div class="section-header tutorial-header">Hướng dẫn thuê xe</div>
            <n-space justify="space-around" size="large">
                <div class="tutorial-content">
                    <img src="../../assets/step1.jpg" alt="step1" class="tutorial-img">
                    Bước 1:sample text
                </div>
                <div class="tutorial-content">
                    <img src="../../assets/step2.jpg" alt="step2" class="tutorial-img">
                    Bước 2:sample text
                </div>
                <div class="tutorial-content">
                    <img src="../../assets/step3.jpg" alt="step3" class="tutorial-img">
                    bước 3: sample text
                </div>
                <div class="tutorial-content">
                    <img src="../../assets/step4.jpg" alt="step4" class="tutorial-img">
                    Bước 4: sample text
                </div>
            </n-space>
            <a href="/tutorial" class="btn-more">Xem thêm
                <n-icon>
                    <arrowLogo />
                </n-icon>
            </a>
        </div>
    </div>
</template>

<script>
import {
    ArrowForwardCircleOutline as arrowLogo
} from '@vicons/ionicons5'
export default {
    components: {
        arrowLogo
    }
}
</script>

<style scoped>

.tutorial {
    background-color: aquamarine;
}

.tutorial-content {
    text-align: center;
    display: grid;
    font-size: 20px;
}

.tutorial-img {
    border-radius: 50%;
    width: 200px;
}

.tutorial-header {
    font-size: 35px;
    color: #5d5d5d;
    text-align: center;
}

.section-header {
    font-weight: bold;
    margin-bottom: 40px;
}

.btn-more {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
    margin-top: 15px;
    float: right;
    border-bottom: solid 2px;
    text-decoration: none;
    color: black;
}

.btn-more>.n-icon {
    top: 3px;
}

.btn-more:hover>.n-icon {
    top: 1px;
    color: rgb(88, 88, 88);
}

.btn-more:hover {
    color: rgb(88, 88, 88);
}
</style>