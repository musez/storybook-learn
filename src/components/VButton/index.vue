<template>
    <button :class="type" class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "HelloWorld",
        props: {
            type: {
                type: String,
                default: "default" // default/primary/danger
            }
        }
    };
</script>

<style scoped lang="scss">
    .btn {
        border: 1px solid transparent;
        background: #fff;
        outline: none;
        color: #333;
        padding: 5px 10px;
    }

    .default {
        border: 1px solid #e3e3e3;
        color: #333;
        background-color: #fff;
    }

    .primary {
        border: 1px solid #007cff;
        color: #fff;
        background-color: #007cff;
    }

    .danger {
        border: 1px solid #cb191d;
        color: #fff;
        background-color: #cb191d;
    }
</style>
