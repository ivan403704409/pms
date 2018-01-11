import Draggabilly from 'draggabilly';

export default {
	install(Vue, options) {
		

	    Vue.directive('drag', {
	        bind: function (el, binding, vnode, oldVnode) {
	        	el.last = {
	        		x: 0,
	        		y: 0
	        	}
	        	el.setAttribute('data-dragable', '')
	        	el.mousemove = function(ev){
		            let { clientX: x, clientY: y } = ev
		            let disX = x- el.last.x
		            let disY = y -el.last.y
		            el.style.transform = `translate3d(${disX}px, ${disY}px,0)`
		        }
		        el.mouseup = function(ev){
		            el.style.transform = `none`
	        		el.removeAttribute('data-draging')
		            document.removeEventListener('mousemove', el.mousemove, false)
		            document.removeEventListener('mouseup', el.mouseup, false)
		        }
	        	el.addEventListener('mousedown', function (ev) {
	        		console.log('mousedown')
	        		el.last = {
		                x: ev.clientX,
		                y: ev.clientY,
		            }
	        		el.setAttribute('data-draging', '')
	        		document.addEventListener('mousemove', el.mousemove, false)
            		document.addEventListener('mouseup', el.mouseup, false)
            		ev.stopPropagation();
	        	}, false)

	            // el.style.position = 'absolute';
	            // var options = binding.value || {};
	            // options.containment = '#j-frame';
	            // var draggie = new Draggabilly(el, options);
	            // el.$draggie = draggie;
	            // var directives = vnode.data.directives;
	            // for (var i in directives) {
	            //     var dir = directives[i];
	            //     if (dir.name === "drag-on") {
	            //         draggie.on(dir.arg, dir.value);
	            //     }
	            //     else if (dir.name === "drag-once") {
	            //         draggie.on(dir.arg, dir.value);
	            //     }
	            // }
	        },
	        unbind: function (el, binding, vnode, oldVnode) {
	            //TODO
	        }
	    });

	},
}