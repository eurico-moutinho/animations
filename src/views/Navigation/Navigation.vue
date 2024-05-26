<script lang="ts">
import { ref } from 'vue';

export default {
  data() {
    return {
        
        list: null as HTMLElement[] | null
    };
  },
  mounted(): void {

    const ctrl = this;

    const nodeList = document.querySelectorAll('.list');

    ctrl.list = Array.from(nodeList) as HTMLElement[];

    function activeLink(this: HTMLElement, event: Event): void {

        ctrl.list?.forEach((listItem: HTMLElement) => {

        listItem.classList.remove('active');

      });

      this.classList.add('active');
    }

    ctrl.list.forEach((listItem: HTMLElement) => {

        listItem.addEventListener('click', function(event) {

            activeLink.call(this, event);
            
        });
    });

  }
};
</script>

<template src="./template.html"></template>

<style lang="sass" src="./styles.sass"></style>