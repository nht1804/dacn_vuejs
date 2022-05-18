<template>
    <div class="total-wrap">
        <div class="total-icon">
            <n-icon v-if="name === 'Customer'">
                <PersonIcon style="font-size: 30px;" />
            </n-icon>
            <n-icon v-if="name === 'Bill' || name === 'Bill today'">
                <CartIcon style="font-size: 30px;" />
            </n-icon>
            <n-icon v-if="name === 'Car'">
                <CarIcon style="font-size: 30px;" />
            </n-icon>
        </div>
        <div class="total-content">
            <div class="title">
                <h1>{{ name }}</h1>
            </div>
            <div class="total">
                <n-number-animation :from="0" :to="count" :active="true" :precision="0" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {
    Person as PersonIcon,
    Cart as CartIcon,
    CarSportSharp as CarIcon
} from '@vicons/ionicons5'
export default {
    props: {
        url: String,
        name: String
    },
    data() {
        return {
            count: 0,
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        async getData() {
            axios.get(this.url)
                .then(res => {
                    if (res.data.data.count) {
                        this.count = res.data.data.count
                    }
                    if (res.data.data[0].count) {
                        this.count = res.data.data[0].count
                    }
                })
                .catch(err => {
                    console.error(err);
                })
        }
    },
    components: {
        PersonIcon,
        CartIcon,
        CarIcon
    }
}
</script>

<style scoped>
.total-wrap {
    display: flex;
    align-items: flex-end;
    background-color: rgb(35, 36, 53);
    border-radius: 5px;
    padding: 10px 20px;
}

.total-icon {
    display: table-cell;
    padding: 0px 20px;
}

i {
    color: rgb(119, 203, 255);
}

.total-content {
    color: rgb(119, 203, 255);
    display: table-cell;
    margin-left: 20px;
}
</style>