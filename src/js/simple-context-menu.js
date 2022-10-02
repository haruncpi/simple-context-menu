(function ($) {
    "use strict";
    $.fn.simpleContextMenu = function (customConfig) {

        let config = $.extend({
            class: null,
            onShow: null,
            onHide: null,
            options: [],
        }, customConfig);

        let el = $(this);
        let container = $('div.scm-container');

        if (container.length === 0) {
            $('body').append('<div class="scm-container"></div>')

            if (config.class && typeof config.class === 'string') {
                $('div.scm-container').addClass(config.class)
            }
        }

        if ($('style.scm-style').length === 0) {
            let style = '.scm-container{box-sizing:border-box;background:#555;min-width:180px;max-width:180px;position:absolute;display:none;padding:6px 0;border-radius:6px}.scm-container .scm-item{box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;padding:7px 12px;color:#fff;display:flex;font-size:13px;cursor:pointer;transition:.3s}.scm-container .scm-item>div:first-child{margin-right:10px}.scm-container .scm-item>div:nth-child(2){white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.scm-container .scm-item:hover{background:#4169e1;transition:.3s}'
            $('head').append(`<style class="scm-style">${style}</style>`)
        }

        $(document).click(function (e) {
            let container = $('div.scm-container');
            if (container.is(":visible")) {
                container.fadeOut('fast', function () {
                    if (typeof config.onHide === 'function') {
                        config.onHide()
                    }
                })
            }
        })

        el.contextmenu(function (e) {
            e.preventDefault()

            let container = $('div.scm-container');

            let html = ''
            config.options.forEach(function (item, index) {
                html += `<div class="scm-item" data-index="${index}">`;
                if (item.icon) {
                    html += `<div>${item.icon}</div>`
                }
                html += `<div>${item.label}</div>`
                html += '</div>'
            })

            container.html(html)

            let containerHeight = container.outerHeight()
            let containerWidth = container.outerWidth()

            let docHeight = $(document).outerHeight()
            let docWidth = $(document).outerWidth()

            let top = e.pageY;
            let left = e.pageX;

            if (e.pageX + containerWidth > docWidth) {
                left = docWidth - containerWidth
            }

            if (e.pageY + containerHeight > docHeight) {
                top = docHeight - containerHeight
            }

            container
                .css({
                    top: top,
                    left: left,
                    zIndex: 100
                })
                .slideDown('fast', function () {
                    if (typeof config.onShow === 'function') {
                        config.onShow()
                    }
                })

            container.find('div.scm-item').click(function () {
                let index = $(this).data('index')
                let target = config.options[index]
                if (target.action && typeof (target.action) === 'function') {
                    target.action()
                }
            })

        })

    }

})(jQuery)