var map = document.querySelector('#map')

var paths = map.querySelectorAll ('.map__image a')


paths.forEach(function (path) {

	paths.addEventListener('mouseenter',function (e){

		var id = this.id.replace('FR-','')

			map.querySelectorAll('.is-active').forEach(function (item) {

				item.classList.remove('is-active')
			})

			document.querySelector('#list-' + id).classList.add('is-active')
			document.querySelector('#region-' + id).classList.add('is-active')

	})
})