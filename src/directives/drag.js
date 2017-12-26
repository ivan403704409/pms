import Draggabilly from 'draggabilly';

export default {
	install(Vue, options) {
	    Vue.directive('drag', {
	        bind: function (elem, binding, vnode, oldVnode) {
	            elem.style.position = 'absolute';
	            var options = binding.value || {};
	            options.containment = '#j-frame';
	            var draggie = new Draggabilly(elem, options);
	            elem.$draggie = draggie;
	            var directives = vnode.data.directives;
	            for (var i in directives) {
	                var dir = directives[i];
	                if (dir.name === "drag-on") {
	                    draggie.on(dir.arg, dir.value);
	                }
	                else if (dir.name === "drag-once") {
	                    draggie.on(dir.arg, dir.value);
	                }
	            }
	        },
	        unbind: function (elem, binding, vnode, oldVnode) {
	            //TODO
	        }
	    });
	    Vue.directive('drag-on', {
	        bind (elem, binding, vnode, oldVnode) {
	            return; //No need to do anything
	        },
	    });
	    Vue.directive('drag-once', {
	        bind (elem, binding, vnode, oldVnode) {
	            return; //No need to do anything
	        },
	    });
	},
}