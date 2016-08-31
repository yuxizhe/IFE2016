<template>
	<div>FirstPage</div>
</template>

<script >
	
	export default {

		name:'FirstPage',

		route:{
            data:function (transition) {
                console.log('data  change')
                transition.next()
            },
            activate:function (transition) {
                console.log('activate change')
                transition.next()
            },
            deactivate:function (transition) {
                console.log('deactivate change')
                transition.next()
            }
        }
	}
</script>