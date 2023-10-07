   var styleItem = document.createElement("style");
       styleItem.appendChild(document.createTextNode(`
       .context-menu {
    border: 4px solid #337AB7;
    background: #BFE2FF;
    width: 180px;
    height: 100px;
    display: inline-flex;
    text-align: center;
    align-items: center;
    margin: 20px;
}
.context-menu-open {
    display: none;
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.54);
    background-color: white;
    border-radius: 4px;
    padding: 4px;
}
.context-menu-open ul {
    padding: 0;
    margin: 0;
}
.context-menu-open ul li {
    cursor: pointer;
    list-style: none;
    padding: 10px 12px;
    margin: 0;
    border-bottom: 1px solid #BFE2FF;
}
.context-menu-open ul li:last-child {
    border-bottom: 1px solid transparent;
}
.context-menu-open ul li:hover {
    background-color: #BFE2FF;
}

#chatbox-container,.fade-box,.swal2-popup {
    box-shadow: 0 0 4px 2px #ffffffab!important
}

.tab-menu {
    display: flex;
    flex-direction: column
}

.tab-menu .tabs {
    border-bottom: 2px solid #ffffffab;
    display: flex;
    font-size: 18px;
    box-shadow: 0 0 0px 0px #ffffff !important;

}

.tab-menu .tab:not(:last-child) {
    border-right: 2px solid #d0d0d000
}

.tab-menu .tab.active {
    background: rgb(255 255 255 / 0%)
}

.fade-box {
    background: linear-gradient(to right bottom,#ffffff00,#ffffff00);
    border-radius: 4px
}

.pretty.p-switch .state:before {
    border: 1px solid #ffffff;
    border-radius: 60px;
    box-sizing: unset;
    content: "";
    height: calc(1em + 2px);
    position: absolute;
    top: 0;
    top: calc(-116% + 1em);
    transition: all .5s ease-in-out;
    width: 2em;
    z-index: 0
}

.pretty.p-switch .state label {
    text-indent: 2.5em
}

.pretty.p-switch .state label:after,.pretty.p-switch .state label:before {
    border-color: white;
    border-radius: 100%;
    left: 0;
    transform: scale(.8);
    transition: all .5s ease
}

.pretty.p-switch .state label:after {
    background-color: #ffffff14!important
}

#overlay {
    background: radial-gradient(rgb(255 255 255 / 0%) 300px,rgb(255 255 255 / 5%));
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0
}

body {
    color: #fff;
    margin: 0;
    overflow: hidden;
    padding: 0
}
.line[data-v-ba56a55e] {
    margin-left: 10000px;
    margin-right: 10px
}

#canvas {
    display: block;
    height: 100%;
    outline: none;
    width: 100%
}

* {
    font-family: Nunito,sans-serif;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

a {
    color: #ffffff00;
    text-decoration: none
}

input[type=number],input[type=text],select {
    background: rgb(255 255 255 / 6%);
    box-shadow: 0 0 5px hsl(0deg 0% 100%);
    border: 1px solid #fff3;
    border-radius: 4px;
    box-sizing: border-box;
    color: #ffffff;
    display: block;
    outline: 0;
    padding: 5px;
    width: 100%;
    text-shadow: 0 0 5px hsl(0deg 0% 100%);
}

#starfield {
    height: 100%;
    width: 100%
}

.tab-menu .tabs[data-v-f3632da6] {
    border-bottom: 2px solid #ffffffa8;
    display: flex;
    font-size: 18px;
    flex-wrap: nowrap;
    flex-direction: row;
}

.tab-menu .tab[data-v-f3632da6] {
    cursor: pointer;
    flex: 1;
    padding: 7px;
    position: relative;
    text-align: center
}

.tab-menu .tab[data-v-f3632da6]:not(:last-child) {
    border-right: 2px solid #000000
}

.tab-menu .tab.active[data-v-f3632da6] {
    background: rgb(255 255 255 / 31%)
}

.pretty.p-switch .state[data-v-f3632da6]:before {
    background: #ffffff
}
#skins[data-v-49f260b2] {
    grid-gap: 15px;
    box-sizing: border-box;
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    min-width: 100%;
    padding: 16px
}

.skin-container[data-v-49f260b2] {
    display: flex;
    position: relative
}

.skin[data-v-49f260b2] {
    border: 1px solid #ffffff00;
    border-radius: 50%;
    box-shadow: 0 0 6px 2px #ffffff0a;
    box-sizing: border-box;
    cursor: pointer;
    width: 100%
}

.skin-remove-button[data-v-49f260b2] {
    display: none
}

.skin-container:hover .skin-remove-button[data-v-49f260b2] {
    border-radius: 50%;
    cursor: pointer;
    display: inline;
    font-size: 15px;
    position: absolute;
    right: -3px;
    top: -3px
}

.skin.add-skin[data-v-49f260b2] {
    background: radial-gradient(#ffffff33,rgb(0 0 0))
}

.selected[data-v-49f260b2] {
    box-shadow: 0 0 15px 2px white
}

.progress[data-v-5f2d6d72] {
    background: rgb(255 255 255 / 0%);
    border-radius: 6px;
    box-shadow: inset 0 1px 2px rgb(255 255 255),0 1px hsl(0deg 0% 100%);
    padding: 5px
}

.progress-bar[data-v-5f2d6d72] {
    background-color: #ffffff;
    border-radius: 4px;
    height: 20px
}

.progress-striped .progress-bar[data-v-5f2d6d72] {
    background: repeating-linear-gradient(-0deg, #ffffff30, #ffffff00 25px, #ffffff60, #ffffff 50px)
}

#player-container #game-buttons #play-button[data-v-5190ae12] {
    background: #ffffff14;
    border: 0;
    border-radius: 4px;
    box-shadow: 0 0 1px 1px #fff;
    color: #ffffff;
    cursor: pointer;
    flex: 9;
    font-size: 16px;
    margin-right: 7px;
    outline: none;
    padding: 5px;
    text-shadow: 0.1px 0.1px 8px #fff
}

#player-container #game-buttons #play-button[data-v-5190ae12]:hover {
    background: #ffffff00;
    transition: all .4s ease
}

#player-container #game-buttons #play-button[data-v-5190ae12]:active {
    background: #00000000;
    transition: none
}

#player-container #game-buttons #play-button[data-v-5190ae12]:disabled {
    background: #ffffff14;
    color: #ffffff;
    cursor: auto;
    transition: none
}
.btn[data-v-73f7fbfc] {
    background: #ffffff14;
    border: 0;
    border-radius: 4px;
    box-shadow: 0 0 1px 1px #fff;
    color: #ffffff;
    cursor: pointer;
    font-size: 16px;
    outline: none;
    padding: 5px;
    text-shadow: 0.1px 0.1px 8px #fff;
    width: 100%
}

.btn[data-v-73f7fbfc]:hover {
    background: #ffffff00
}

.btn[data-v-73f7fbfc]:active {
    background: #00000000
}

.btn[data-v-73f7fbfc]:disabled {
    background: #ffffff14;
    color: #ffffff;
    cursor: auto
}


#player-container #game-buttons #spec-button[data-v-5190ae12] {
    background: #ffffff14;
    border: 0;
    border-radius: 4px;
    box-shadow: 0 0 1px 1px #fff;
    color: #ffffff;
    cursor: pointer;
    flex: 1;
    font-size: 16px;
    outline: none;
    padding: 5px;
    text-shadow: 0.1px 0.1px 16px #fff6
}
.live-marker[data-v-f3632da6] {
    background: #ffffff14;
    border-radius: 4px;
    box-shadow: 0 0 1px 1px #fff;
    font-size: 12px;
    font-weight: 700;
    text-shadow: 0.1px 0.1px 8px #fff;
    padding: 2px 4px
}
.swal2-title {
    text-shadow: 0.1px 0.1px 8px #fff
}
.pretty.p-switch input:checked~.state:before {
    border-color: #ffffff!important
}
.reset-option[data-v-c41b640a] {
    color: white;
    text-shadow: 0.1px 0.1px 8px #fff;
    cursor: pointer;
    display: inline-flex;
    justify-content: center
}
.reset-option[data-v-22117250] {
    color: white;
    text-shadow: 0.1px 0.1px 8px #fff;
    cursor: pointer;
    display: inline-flex;
    justify-content: center
}
#hotkey-container .footer[data-v-6e7077ae] {
    border-top: 2px solid #000;
    color: white;
    display: flex;
    justify-content: center;
    padding: 10px;
    text-shadow: 0.1px 0.1px 8px #fff;
}
.vanis-button {
    border: 1px solid #fff;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    outline: none;
    padding: 5px 10px;
    text-decoration: none;
    text-shadow: 0.1px 0.1px 8px #fff;
    box-shadow: 0 0 1px 1px #ffffff14
}
.swal2-popup {
    background: linear-gradient(to right bottom,#ffffff14,#ffffff14);
    border: none;
    border-radius: .3125em;
    box-sizing: border-box;
    display: none;
    flex-direction: column;
    font-family: inherit;
    font-size: 15px;
    justify-content: center;
    max-width: 100%;
    padding: 1.25em;
    position: relative;
    width: auto
}



.pretty.p-switch input:checked~.state label:after {
    background-color: #ffffff14!important
}

#player-container #game-buttons #spec-button[data-v-5190ae12]:hover {
    background: #ffffff00;
    transition: all .4s ease
}
#player-container #game-buttons #spec-button[data-v-5190ae12]:active {
    background: #00000000;
    transition: none
}

#player-container #game-buttons #spec-button[data-v-5190ae12]:disabled {
    background: #ffffff14;
    color: #ffffff;
    cursor: auto;
    transition: none
}
.replay-list-header[data-v-0cef4e3b] {
    align-items: center;
    background: linear-gradient(to right bottom,#ffffff14,#ffffff14);
    border-bottom: 2px solid #fff;
    box-shadow: 0 0 10px 1px #fff;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    position: relative
}
.xp-data[data-v-2a6fb198] {
    color: #fff;
    display: flex;
    position: absolute;
    text-shadow: 0 0 5px #fff;
    top: 4px;
    width: 100%
}


.slider[data-v-22117250] {
    -webkit-appearance: none;
    background: #ffffff00;
    border: 1px solid #ffffff;
    border-radius: 60px;
    box-sizing: border-box;
    display: block;
    outline: none;
    padding: 1px;
    transition: none;
    width: 100%
}

.disabled[data-v-22117250] {
    opacity: .5
}

.slider.draw-delay[data-v-22117250] {
    background: linear-gradient(45deg,rgb(255 255 255 / 0%),#ffffff00 35%)
}

.slider[data-v-22117250]:hover {
    opacity: 1
}

.slider[data-v-22117250]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background: #ffffff;
    border-radius: 60px;
    cursor: pointer;
    height: 15px;
    width: 15px
}
.confirm-button[data-v-2c5139e0] {
    background: #ffffff14;
    border: 0;
    border-radius: 4px;
    box-shadow: 0 0 1px 1px #fff;
    color: #ffffff;
    cursor: pointer;
    font-size: 16px;
    outline: none;
    padding: 5px 9px;
    text-shadow: 1px 1px 8px #fff
}

.confirm-button[data-v-2c5139e0]:hover {
    background: #ffffff00;
    transition: all .4s ease
}

.confirm-button[data-v-2c5139e0]:active {
    background: #ffffff14;
    transition: none
}

.confirm-button[data-v-2c5139e0]:disabled {
    background: #ffffff14;
    color: #ffffff;
    cursor: auto;
    transition: none
}
.perk-color-update[data-v-2c5139e0] {
    background: #ffffff14;
    border: 0;
    border-radius: 4px;
    box-shadow: 0 0 1px 1px #fff;
    color: #ffffff;
    cursor: pointer;
    font-size: 16px;
    grid-row: 2;
    outline: none;
    padding: 5px;
    text-shadow: 1px 1px 8px #fff
}

.perk-color-update[data-v-2c5139e0]:hover {
    background: #ffffff00;
    transition: all .4s ease
}

.perk-color-update[data-v-2c5139e0]:active {
    background: #ffffff14;
    transition: none
}

.perk-color-update[data-v-2c5139e0]:disabled {
    background: #ffffff14;
    color: #ffffff;
    cursor: auto;
    transition: none
}

.reset-option[data-v-22117250] {
    color: white;
    cursor: pointer;
    display: inline-flex;
    justify-content: center
}
.stats[data-v-0b74fc8f] {
    color: #fff;
    padding: 10px;
    transform-origin: top left
}

.chatbox[data-v-400b304a] {
    box-shadow: 0 0 4px 2px #fff!important
}
.social-container[data-v-039f4a6e] {
    bottom: 2000px;
    display: flex;
    justify-content: space-evenly;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 570px
}
.slider[data-v-c41b640a] {
    -webkit-appearance: none;
    background: #ffffff00;
    border: 1px solid #ffffff;
    border-radius: 60px;
    box-sizing: border-box;
    display: block;
    outline: none;
    padding: 1px;
    transition: none;
    width: 100%
}

.disabled[data-v-c41b640a] {
    opacity: .5
}

.slider.draw-delay[data-v-c41b640a] {
    background: linear-gradient(45deg,rgba(255,0,0,.8),#121212 35%)
}

.slider[data-v-c41b640a]:hover {
    opacity: 1
}

.slider[data-v-c41b640a]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background: #ffffff;
    border-radius: 60px;
    cursor: pointer;
    height: 15px;
    width: 15px
}
.tooltip[data-v-4d3211ca] {
    background: linear-gradient(to right bottom,#ffffff14,#ffffff14);
    border-radius: 4px;
    font-size: 14px;
    box-shadow: 0 0 1px 1px #fff;
    max-width: 240px;
    opacity: 0;
    padding: 9px;
    pointer-events: none;
    text-shadow: 0.1px 0.1px 8px #fff;
    position: fixed
}

.tooltip.soft[data-v-4d3211ca] {
    transition: opacity .1s ease-out
}

.tooltip.show[data-v-4d3211ca] {
    opacity: 1
}
.discord[data-v-2a6fb198] {
    background: #ffffff14;
    border: 1px solid #fff;
    border-radius: 4px;
    color: #ffffff;
    cursor: pointer;
    display: block;
    padding: 10px;
    text-shadow: 0.1px 0.1px 8px #fff
}

a {
    color: #dadada;
    text-decoration: none
}
.swal2-styled.swal2-confirm {
    background: initial;
    background-color: #ffffff14;
    box-shadow: 0 0 6px 2px #ffffff00;
    border: 0;
    border-radius: 0.25em;
    color: #fff;
    font-size: 15px;
    text-shadow: 0.1px 0.1px 8px #fff;
}

.swal2-styled.swal2-cancel {
    background: initial;
    background-color: #ffffff14;
    border: 0;
    border-radius: .25em;
    color: #fff;
    font-size: 15px;
    text-shadow: 0.1px 0.1px 8px #fff
}
.server-button[data-v-5fa0c268] {
    background: #ffffff14;
    border: 0;
    border-radius: 4px;
    box-shadow: 0 0 1px 1px #fff;
    color: #ffffff;
    cursor: pointer;
    font-size: 16px;
    font-size: 14px;
    outline: none;
    padding: 5px;
    text-shadow: 0.1px 0.1px 8px #fff
}

.server-button[data-v-5fa0c268]:hover {
    background: #ffffff14;
    transition: all .4s ease
}

.server-button[data-v-5fa0c268]:active {
    background: #00000000;
    transition: none
}

.server-button[data-v-5fa0c268]:disabled {
    background: #ffffff14;
    color: #ffffff;
    cursor: auto;
    transition: none
}
.button-row>.button {
    background: #ffffff14;
    border: 0;
    border-radius: 4px;
    box-shadow: 0 0 1px 1px #fff;
    color: #dadada;
    cursor: pointer;
    font-size: 16px;
    font-size: 14px;
    outline: none;
    padding: 5px;
    text-shadow: 0.1px 0.1px 8px #fff
}
.slider[data-v-7019b401] {
    -webkit-appearance: none;
    background: #ffffff14;
    border: 1px solid #ffffff;
    border-radius: 60px;
    box-sizing: border-box;
    display: block;
    outline: none;
    padding: 1px;
    transition: none;
    width: 100%
}
.slider[data-v-7019b401]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background: #ffffff;
    border-radius: 60px;
    cursor: pointer;
    height: 15px;
    width: 15px
}
.server-list-item[data-v-f3632da6] {
    border-bottom: 2px solid #fff0;
    cursor: pointer;
    display: flex;
    padding: 10px;
    user-select: none
}








.section[data-v-0a751125] {
        border: 2px solid #ffffff40;
        border-radius: 10px;
        overflow: hidden
    }

.section>.header[data-v-0a751125] {
    background: rgba(0,0,0,.5);
    border-bottom: 2px solid #ffffff40;
    box-shadow: 0 0 10px 1px #7b7b7b;
    padding: 7px
}
.warning[data-v-0a751125] {
    color: #ffffff;
    text-shadow: 0 0 8px hsl(0deg 0% 100%);
}


.tab[data-v-5190ae12]:not(:last-child) {
    border-right: 2px solid #fff0
}
.tabs[data-v-5190ae12] {
    border-bottom: 2px solid #fff0;
    display: flex;
    font-size: 20px
}

.tab-menu .tab[data-v-f3632da6]:not(:last-child) {
    border-right: 2px solid #ffffff00;
}
.tab-menu .tab:not(:last-child) {
    border-right: 2px solid #fff0
}
::-webkit-scrollbar {
    height: 1px;
    width: 0px
}


.badge-list[data-v-637ffd77] {
    display: inline;
    flex-direction: row;
    margin-right: 3px
}

.badge-icon.dim[data-v-637ffd77] {
    filter: brightness(35%)
}

.badge-icon.not-pickable[data-v-637ffd77] {
    cursor: not-allowed;
    filter: brightness(40%) grayscale(90%)
}

.badge-icon.pickable[data-v-637ffd77] {
    cursor: pointer
}

#leaderboard[data-v-7e7860a8] {
    box-shadow: 0 0 4px 2px #ffffff14!important
}


.container[data-v-769dba30] {
    box-shadow: 0 0 4px 2px #ffffff14!important
}

.scroll[data-v-06e9bb4c] {
    animation-duration: 0.5s;
    animation-name: scroll-06e9bb4c;
    animation-timing-function: cubic-bezier(0.77, -0.23, 0.49, 1.12);
    overflow: hidden
}
.menu-enter-active[data-v-06e9bb4c] {
    transition: all .3s cubic-bezier(1, 0.05, 0.05, 0.84)
}

.chatbox[data-v-1664b5c5] {
    box-shadow: 0 0 4px 2px #ffffff14!important
}

`));
    document.head.appendChild(styleItem)
})();