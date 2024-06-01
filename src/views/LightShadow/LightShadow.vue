<script lang="ts">

export default {
  data() {
    return {
      shadowText: null as HTMLElement | null,
      shadowLight: null as HTMLElement | null
    };
  },

  mounted(): void {

    this.shadowText = document.getElementById('light-shadow-text');
    this.shadowLight = document.getElementById('light-shadow-light');

    document.addEventListener('mousemove', (event: MouseEvent | TouchEvent): void => {
        
        if (this.shadowLight && this.shadowText) {

            const clientX = 'clientX' in event ? event.clientX : event.touches[0].clientX;
            const clientY = 'clientY' in event ? event.clientY : event.touches[0].clientY;

            this.shadowLight.style.left = clientX + 'px';
            this.shadowLight.style.top =  clientY + 'px';

            const distanceX = clientX - this.shadowText.offsetLeft - this.shadowLight.offsetWidth / 2;
            const distanceY = clientY - this.shadowText.offsetTop - this.shadowLight.offsetHeight / 2;

            let newShadow: string = '';
            let shadowX: number = 0;
            let shadowY: number = 0;
            let opacity: number = 0;
            
            for(let i = 0; i < 200; i++) {

                shadowX = -distanceX * (i / 200);
                shadowY = -distanceY * (i / 200);
                opacity = 1 - (i / 100);

                newShadow += (newShadow ? ',' : '') + shadowX + 'px ' + shadowY + 'px 0 rgba(33, 33, 33, '+opacity+')';
                
            }

            this.shadowText.style.textShadow = newShadow;
        }
    });

  }
};

</script>

<template src="./template.html"></template>

<style lang="sass" src="./styles.sass"></style>