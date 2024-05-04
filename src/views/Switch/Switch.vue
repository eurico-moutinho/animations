<script lang="ts">
import { ref } from 'vue';

export default {
  data() {
    return {
        box: null as HTMLElement | null,
        translX: 0 as number
    };
  },
    mounted(): void {

        this.box = document.getElementById('switch-button');

        let spans: HTMLElement[] = [];

        for (let i = 0; i < 150; i+=5) {

            let span: HTMLElement = document.createElement('span');

            spans.push(span);

            span.style.top = (i * 1) + 'px';

            let randomDelay: number = Math.random() * 0.3;

            span.style.transitionDelay = randomDelay + 's';

            this.box?.appendChild(span);

        }

        const changeX = ref<boolean>(false);

        this.box?.addEventListener('click', () => {

            changeX.value = !changeX.value;

            this.translX = 0;

            if (changeX.value) {

                this.translX = 150;

            }

        });
    }
};

</script>

<template src="./template.html"></template>

<style lang="sass" src="./styles.sass"></style>