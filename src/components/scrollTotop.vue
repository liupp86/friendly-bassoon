<style lang="scss" scoped>
.toTop {
	position: fixed;
	bottom: 50px;
	right: 50px;
	background-color: #784cfa;
	color: #fff;
	padding: 10px;
	border-radius: 5px;
	text-align: center;
	cursor: pointer;
	font-size: 14px;
}
</style>
<template>
	<div class="toTop" @click="toTop" v-show="flag">
		返回 <br />
		顶部
	</div>
</template>
<script>
export default {
	data() {
		return {
			flag: false,
		};
	},
	methods: {
		toTop() {
			var st =
				document.body.scrollTop || document.documentElement.scrollTop;
			var x = (st / 200) * 16.7;
			var timer = setInterval(() => {
				st -= x;
				if (st <= 0) {
					st = 0;
					clearInterval(timer);
				}

				document.body.scrollTop = st;
				document.documentElement.scrollTop = st;
			}, 16.7);
			// document.body.scrollTop = 0;
			// document.documentElement.scrollTop = 0;
		},
		checkScroll() {
			var st =
				document.body.scrollTop || document.documentElement.scrollTop;
			this.flag = st > 200;
		},
	},
	mounted() {
		this.checkScroll();
		window.addEventListener("scroll", () => {
			this.checkScroll();
		});
	},
};
</script>