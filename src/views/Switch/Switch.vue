<script lang="ts">

export default {
  data() {
    return {
        box: null as HTMLElement | null
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

        this.box?.addEventListener('click', () => {

            this.box?.classList.toggle('active');

        });
    }
};

</script>

<template src="./template.html"></template>

<style lang="sass" src="./styles.sass"></style>