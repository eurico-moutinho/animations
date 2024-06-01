<script lang="ts">

export default {
    
    data() {
        return {
            isDragging: false,
            x: 0,
            lastPositionX: 0
        }
    },
    mounted(): void {

        const box: HTMLElement | null = document.querySelector('.box');

        if(box) {

            box.addEventListener("mousedown", (event: MouseEvent): void => {

                this.isDragging = true;

                this.lastPositionX = event.clientX;

            });

            window.addEventListener("mousemove", (event: MouseEvent): void => {

                if(this.isDragging){

                    this.x -= (this.lastPositionX - event.clientX)/70;

                    box.style.transform = "perspective(1000px) rotateY(" + this.x + "deg)";

                }

            });

            window.addEventListener("mouseup", (event: MouseEvent): void => {

                this.isDragging = false;

            });
        }

    }
};

</script>

<template src="./template.html"></template>

<style lang="sass" src="./styles.sass"></style>