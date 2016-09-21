<template>
    <button type="primary" @click="showaside=!showaside">侧栏</button>
    <accordion type="info">
        <panel is-open type="primary">
            <strong slot="header"><u>Panel #1</u></strong> ...
        </panel>
        <panel header="Panel #2">
            <strong slot="header"><u>Panel #2</u></strong> akjfaklsdj;fkljasd;klfjasd;klfjas;kldjfa;lskdjfa;klsdjf;klsdjfas;kl
        </panel>
        <panel header="Panel #3">
            <strong slot="header"><u>Panel #3</u></strong> aslkdjf;kweinaiivasuofiauoiewrwKLERJ;LWKEJ
        </panel>
        <panel header="Panel #4">
            <strong slot="header"><u>Panel #4</u></strong> ...
        </panel>
    </accordion>
    <aside :show.sync="showaside" placement="left" header="工具栏" width="350">
        NEIRONG
    </aside>
    <dropdown>
        <button type="button" class="btn btn-default">
            Action
            <span class="caret"></span>
        </button>
        <ul slot="dropdown-menu" class="dropdown-menu">
            <li><a href="#dropdown">Action</a></li>
            <li><a href="#dropdown">Another action</a></li>
            <li><a href="#dropdown">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#dropdown">Separated link</a></li>
        </ul>
    </dropdown>
    <dropdown text="Action" type="primary">
        <li><a href="#dropdown">Action</a></li>
        <li><a href="#dropdown">Another action</a></li>
        <li><a href="#dropdown">Something else here</a></li>
        <li role="separator" class="divider"></li>
        <li><a href="#dropdown">Separated link</a></li>
    </dropdown>
    <dropdown text="Disabled" type="warning">
        <li><a href="#dropdown">Action</a></li>
    </dropdown>
</template>
<script>
import {
    accordion,
    aside,
    carousel,
    dropdown
} from 'vue-strap'

export default {
    data() {
            return {
                showaside: 0
            }
        },

        components: {
            accordion,
            aside,
            carousel,
            dropdown
        }
}
</script>
