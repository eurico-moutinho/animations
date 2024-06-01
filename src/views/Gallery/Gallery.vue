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

        if (box) {
            const onMouseDown = (event: MouseEvent | TouchEvent): void => {
                this.isDragging = true;
                this.lastPositionX = 'clientX' in event ? event.clientX : event.touches[0].clientX;
            };

            const onMouseMove = (event: MouseEvent | TouchEvent): void => {
                if (this.isDragging) {
                    const clientX = 'clientX' in event ? event.clientX : event.touches[0].clientX;
                    
                    if(window.innerWidth < 768) {
                        this.x -= (this.lastPositionX - clientX) / 8;
                        box.style.transform = "perspective(1000px) scale(0.7) rotateY(" + this.x + "deg)";

                    } else {
                        this.x -= (this.lastPositionX - clientX) / 1;
                        box.style.transform = "perspective(1000px) rotateY(" + this.x + "deg)";

                    }

                    this.lastPositionX = clientX;
                }
            };

            const onMouseUp = (): void => {
                this.isDragging = false;
            };

            box.addEventListener("mousedown", onMouseDown);
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseup", onMouseUp);

            box.addEventListener("touchstart", onMouseDown);
            window.addEventListener("touchmove", onMouseMove);
            window.addEventListener("touchend", onMouseUp);
        }
    }
};

</script>

<template src="./template.html"></template>

<style lang="sass" src="./styles.sass"></style>