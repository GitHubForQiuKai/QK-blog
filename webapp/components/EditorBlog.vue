<template>
	<div id="eidtorBlog">
		<!-- <div id="mardown"></div> -->
	</div>
</template>

<script>
import SimpleMDE from "simplemde";
export default {
  name:"eidtorBlog",
  mounted:function(){
 	console.log(this.$el.firstChild);
  	// var simplemde = new SimpleMDE({ element: this.$el.firstChild});

  }
}
</script>

<style>
</style>