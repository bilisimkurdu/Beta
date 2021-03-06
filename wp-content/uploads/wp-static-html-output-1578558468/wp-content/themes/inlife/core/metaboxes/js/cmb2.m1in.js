window.CMB2 = function (window, document, $, undefined) {
    "use strict";
    var l10n = window.cmb2_l10, setTimeout = window.setTimeout, cmb = {
        idNumber: !1,
        repeatEls: 'input:not([type="button"],[id^=filelist]),select,textarea,.cmb2-media-status',
        noEmpty: 'input:not([type="button"]):not([type="radio"]):not([type="checkbox"]),textarea',
        repeatUpdate: 'input:not([type="button"]),select,textarea,label',
        styleBreakPoint: 450,
        mediaHandlers: {},
        neweditor_id: [],
        defaults: {
            time_picker: l10n.defaults.time_picker,
            date_picker: l10n.defaults.date_picker,
            color_picker: l10n.defaults.color_picker || {}
        },
        media: {frames: {}}
    }, $id = function (selector) {
        return $(document.getElementById(selector))
    };
    return cmb.metabox = function () {
        return cmb.$metabox ? cmb.$metabox : (cmb.$metabox = $(".cmb2-wrap > .cmb2-metabox"), cmb.$metabox)
    }, cmb.init = function () {
        cmb.log("CMB2 localized data", l10n);
        var $metabox = cmb.metabox(), $repeatGroup = $metabox.find(".cmb-repeatable-group");
        cmb.initPickers($metabox.find('input[type="text"].cmb2-timepicker'), $metabox.find('input[type="text"].cmb2-datepicker'), $metabox.find('input[type="text"].cmb2-colorpicker')), $id("ui-datepicker-div").wrap('<div class="cmb2-element" />'), $('<p><span class="button cmb-multicheck-toggle">' + l10n.strings.check_toggle + "</span></p>").insertBefore(".cmb2-checkbox-list:not(.no-select-all)"), cmb.makeListSortable(), $metabox.on("change", ".cmb2_upload_file", function () {
            cmb.media.field = $(this).attr("id"), $id(cmb.media.field + "_id").val("")
        }).on("click", ".cmb-multicheck-toggle", cmb.toggleCheckBoxes).on("click", ".cmb2-upload-button", cmb.handleMedia).on("click", ".cmb-attach-list li, .cmb2-media-status .img-status img, .cmb2-media-status .file-status > span", cmb.handleFileClick).on("click", ".cmb2-remove-file-button", cmb.handleRemoveMedia).on("click", ".cmb-add-group-row", cmb.addGroupRow).on("click", ".cmb-add-row-button", cmb.addAjaxRow).on("click", ".cmb-remove-group-row", cmb.removeGroupRow).on("click", ".cmb-remove-row-button", cmb.removeAjaxRow).on("keyup paste focusout", ".cmb2-oembed", cmb.maybeOembed).on("cmb2_remove_row", ".cmb-repeatable-group", cmb.resetTitlesAndIterator).on("click", ".cmbhandle, .cmbhandle + .cmbhandle-title", cmb.toggleHandle), $repeatGroup.length && $repeatGroup.filter(".sortable").each(function () {
            $(this).find(".button.cmb-remove-group-row").before('<a class="button cmb-shift-rows move-up alignleft" href="#"><span class="' + l10n.up_arrow_class + '"></span></a> <a class="button cmb-shift-rows move-down alignleft" href="#"><span class="' + l10n.down_arrow_class + '"></span></a>')
        }).on("click", ".cmb-shift-rows", cmb.shiftRows).on("cmb2_add_row", cmb.emptyValue), setTimeout(cmb.resizeoEmbeds, 500), $(window).on("resize", cmb.resizeoEmbeds)
    }, cmb.resetTitlesAndIterator = function () {
        $(".cmb-repeatable-group").each(function () {
            var $table = $(this);
            $table.find(".cmb-repeatable-grouping").each(function (rowindex) {
                var $row = $(this);
                $row.data("iterator", rowindex), $row.find(".cmb-group-title h4").text($table.find(".cmb-add-group-row").data("grouptitle").replace("{#}", rowindex + 1))
            })
        })
    }, cmb.toggleHandle = function (evt) {
        evt.preventDefault(), $(document).trigger("postbox-toggled", $(this).parent(".postbox").toggleClass("closed"))
    }, cmb.toggleCheckBoxes = function (evt) {
        evt.preventDefault();
        var $self = $(this), $multicheck = $self.closest(".cmb-td").find("input[type=checkbox]:not([disabled])");
        $self.data("checked") ? ($multicheck.prop("checked", !1), $self.data("checked", !1)) : ($multicheck.prop("checked", !0), $self.data("checked", !0))
    }, cmb.handleMedia = function (evt) {
        evt.preventDefault();
        var $el = $(this);
        cmb.attach_id = $el.hasClass("cmb2-upload-list") ? !1 : $el.closest(".cmb-td").find(".cmb2-upload-file-id").val(), cmb.attach_id = "0" !== cmb.attach_id ? cmb.attach_id : !1, cmb._handleMedia($el.prev("input.cmb2-upload-file").attr("id"), $el.hasClass("cmb2-upload-list"))
    }, cmb.handleFileClick = function (evt) {
        evt.preventDefault();
        var $el = $(this), $td = $el.closest(".cmb-td"), isList = $td.find(".cmb2-upload-button").hasClass("cmb2-upload-list");
        cmb.attach_id = isList ? $el.find('input[type="hidden"]').data("id") : $td.find(".cmb2-upload-file-id").val(), cmb.attach_id && cmb._handleMedia($td.find("input.cmb2-upload-file").attr("id"), isList, cmb.attach_id)
    }, cmb._handleMedia = function (formfield, isList) {
        if (wp) {
            var media = cmb.media;
            media.field = formfield, media.$field = $id(media.field), media.fieldData = media.$field.data(), media.previewSize = media.fieldData.previewsize, media.fieldName = media.$field.attr("name");
            var uploadStatus, attachment;
            if (media.field in media.frames)return void media.frames[media.field].open();
            media.frames[media.field] = wp.media({
                title: cmb.metabox().find("label[for=" + media.field + "]").text(),
                library: media.fieldData.queryargs || {},
                button: {text: l10n.strings[isList ? "upload_files" : "upload_file"]},
                multiple: isList ? "add" : !1
            }), cmb.mediaHandlers.list = function (selection, returnIt) {
                attachment = selection.toJSON(), media.$field.val(attachment.url), $id(media.field + "_id").val(attachment.id);
                var fileGroup = [];
                return $(attachment).each(function () {
                    if (this.type && "image" === this.type) {
                        var width = media.previewSize[0] ? media.previewSize[0] : 50, height = media.previewSize[1] ? media.previewSize[1] : 50;
                        uploadStatus = '<li class="img-status"><img width="' + width + '" height="' + height + '" src="' + this.url + '" class="attachment-' + width + "px" + height + 'px" alt="' + this.filename + '"><p><a href="#" class="cmb2-remove-file-button" rel="' + media.field + "[" + this.id + ']">' + l10n.strings.remove_image + '</a></p><input type="hidden" id="filelist-' + this.id + '" data-id="' + this.id + '" name="' + media.fieldName + "[" + this.id + ']" value="' + this.url + '"></li>'
                    } else uploadStatus = '<li class="file-status"><span>' + l10n.strings.file + " <strong>" + this.filename + '</strong></span>&nbsp;&nbsp; (<a href="' + this.url + '" target="_blank" rel="external">' + l10n.strings.download + '</a> / <a href="#" class="cmb2-remove-file-button" rel="' + media.field + "[" + this.id + ']">' + l10n.strings.remove_file + '</a>)<input type="hidden" id="filelist-' + this.id + '" data-id="' + this.id + '" name="' + media.fieldName + "[" + this.id + ']" value="' + this.url + '"></li>';
                    fileGroup.push(uploadStatus)
                }), returnIt ? fileGroup : void $(fileGroup).each(function () {
                    media.$field.siblings(".cmb2-media-status").slideDown().append(this)
                })
            }, cmb.mediaHandlers.single = function (selection) {
                if (attachment = selection.first().toJSON(), media.$field.val(attachment.url), $id(media.field + "_id").val(attachment.id), attachment.type && "image" === attachment.type) {
                    var width = media.previewSize[0] ? media.previewSize[0] : 350;
                    uploadStatus = '<div class="img-status"><img width="' + width + 'px" style="max-width: ' + width + 'px; width: 100%; height: auto;" src="' + attachment.url + '" alt="' + attachment.filename + '" title="' + attachment.filename + '" /><p><a href="#" class="cmb2-remove-file-button" rel="' + media.field + '">' + l10n.strings.remove_image + "</a></p></div>"
                } else uploadStatus = '<div class="file-status"><span>' + l10n.strings.file + " <strong>" + attachment.filename + '</strong></span>&nbsp;&nbsp; (<a href="' + attachment.url + '" target="_blank" rel="external">' + l10n.strings.download + '</a> / <a href="#" class="cmb2-remove-file-button" rel="' + media.field + '">' + l10n.strings.remove_file + "</a>)</div>";
                media.$field.siblings(".cmb2-media-status").slideDown().html(uploadStatus)
            }, cmb.mediaHandlers.selectFile = function () {
                var selection = media.frames[media.field].state().get("selection"), type = isList ? "list" : "single";
                return cmb.attach_id && isList ? void $('[data-id="' + cmb.attach_id + '"]').parents("li").replaceWith(cmb.mediaHandlers.list(selection, !0)) : void cmb.mediaHandlers[type](selection)
            }, cmb.mediaHandlers.openModal = function () {
                var selection = media.frames[media.field].state().get("selection");
                if (!cmb.attach_id)return selection.reset();
                var attach = wp.media.attachment(cmb.attach_id);
                attach.fetch(), selection.set(attach ? [attach] : [])
            }, media.frames[media.field].on("select", cmb.mediaHandlers.selectFile).on("open", cmb.mediaHandlers.openModal), media.frames[media.field].open()
        }
    }, cmb.handleRemoveMedia = function (evt) {
        evt.preventDefault();
        var $self = $(this);
        return $self.is(".cmb-attach-list .cmb2-remove-file-button") ? ($self.parents("li").remove(), !1) : (cmb.media.field = $self.attr("rel"), cmb.metabox().find("input#" + cmb.media.field).val(""), cmb.metabox().find("input#" + cmb.media.field + "_id").val(""), $self.parents(".cmb2-media-status").html(""), !1)
    }, cmb.cleanRow = function ($row, prevNum, group) {
        var $inputs = $row.find(cmb.repeatUpdate);
        if (group) {
            var $other = $row.find("[id]").not(cmb.repeatUpdate);
            $row.find(".cmb-repeat-table .cmb-repeat-row:not(:first-child)").remove(), $other.length && $other.each(function () {
                var $_this = $(this), oldID = $_this.attr("id"), newID = oldID.replace("_" + prevNum, "_" + cmb.idNumber), $buttons = $row.find('[data-selector="' + oldID + '"]');
                $_this.attr("id", newID), $buttons.length && $buttons.attr("data-selector", newID).data("selector", newID)
            })
        }
        return cmb.neweditor_id = [], $inputs.filter(":checked").prop("checked", !1), $inputs.filter(":selected").prop("selected", !1), $row.find("h3.cmb-group-title").length && $row.find("h3.cmb-group-title").text($row.data("title").replace("{#}", cmb.idNumber + 1)), $inputs.each(function () {
            var newID, oldID, $newInput = $(this), isEditor = $newInput.hasClass("wp-editor-area"), oldFor = $newInput.attr("for"), oldVal = $newInput.attr("value"), type = $newInput.prop("type"), checkable = "radio" === type || "checkbox" === type ? oldVal : !1, attrs = {};
            if (oldFor)attrs = {"for": oldFor.replace("_" + prevNum, "_" + cmb.idNumber)}; else {
                var oldName = $newInput.attr("name"), newName = oldName ? oldName.replace("[" + prevNum + "]", "[" + cmb.idNumber + "]") : "";
                oldID = $newInput.attr("id"), newID = oldID ? oldID.replace("_" + prevNum, "_" + cmb.idNumber) : "", attrs = {
                    id: newID,
                    name: newName,
                    "data-iterator": cmb.idNumber
                }
            }
            if ((undefined !== typeof oldVal && oldVal || checkable) && (attrs.value = checkable ? checkable : ""), "TEXTAREA" === $newInput.prop("tagName") && $newInput.html(""), checkable && $newInput.removeAttr("checked"), $newInput.removeClass("hasDatepicker").attr(attrs).val(checkable ? checkable : ""), isEditor) {
                newID = newID ? oldID.replace("zx" + prevNum, "zx" + cmb.idNumber) : "", $newInput.html("");
                var $wysiwyg = $newInput.parents(".cmb-type-wysiwyg");
                $wysiwyg.find(".mce-tinymce:not(:first-child)").remove();
                var html = $wysiwyg.html().replace(new RegExp(oldID, "g"), newID);
                $wysiwyg.html(html), cmb.neweditor_id.push({id: newID, old: oldID})
            }
        }), cmb
    }, cmb.newRowHousekeeping = function ($row) {
        var $colorPicker = $row.find(".wp-picker-container"), $list = $row.find(".cmb2-media-status");
        return $colorPicker.length && $colorPicker.each(function () {
            var $td = $(this).parent();
            $td.html($td.find('input[type="text"].cmb2-colorpicker').attr("style", ""))
        }), $list.length && $list.empty(), cmb
    }, cmb.afterRowInsert = function ($row) {
        var _prop;
        if (cmb.neweditor_id.length) {
            var i;
            for (i = cmb.neweditor_id.length - 1; i >= 0; i--) {
                var id = cmb.neweditor_id[i].id, old = cmb.neweditor_id[i].old;
                if ("undefined" == typeof tinyMCEPreInit.mceInit[id]) {
                    var newSettings = jQuery.extend({}, tinyMCEPreInit.mceInit[old]);
                    for (_prop in newSettings)"string" == typeof newSettings[_prop] && (newSettings[_prop] = newSettings[_prop].replace(new RegExp(old, "g"), id));
                    tinyMCEPreInit.mceInit[id] = newSettings
                }
                if ("undefined" == typeof tinyMCEPreInit.qtInit[id]) {
                    var newQTS = jQuery.extend({}, tinyMCEPreInit.qtInit[old]);
                    for (_prop in newQTS)"string" == typeof newQTS[_prop] && (newQTS[_prop] = newQTS[_prop].replace(new RegExp(old, "g"), id));
                    tinyMCEPreInit.qtInit[id] = newQTS
                }
                tinyMCE.init({id: tinyMCEPreInit.mceInit[id]})
            }
        }
        cmb.initPickers($row.find('input[type="text"].cmb2-timepicker'), $row.find('input[type="text"].cmb2-datepicker'), $row.find('input[type="text"].cmb2-colorpicker'))
    }, cmb.updateNameAttr = function () {
        var $this = $(this), name = $this.attr("name");
        if ("undefined" != typeof name) {
            var prevNum = parseInt($this.parents(".cmb-repeatable-grouping").data("iterator")), newNum = prevNum - 1, $newName = name.replace("[" + prevNum + "]", "[" + newNum + "]");
            $this.attr("name", $newName)
        }
    }, cmb.emptyValue = function (evt, row) {
        $(cmb.noEmpty, row).val("")
    }, cmb.addGroupRow = function (evt) {
        evt.preventDefault();
        var $self = $(this);
        $self.trigger("cmb2_add_group_row_start", $self);
        var $table = $id($self.data("selector")), $oldRow = $table.find(".cmb-repeatable-grouping").last(), prevNum = parseInt($oldRow.data("iterator"));
        cmb.idNumber = prevNum + 1;
        var $row = $oldRow.clone();
        cmb.newRowHousekeeping($row.data("title", $self.data("grouptitle"))).cleanRow($row, prevNum, !0), $row.find(".cmb-add-row-button").prop("disabled", !1);
        var $newRow = $('<div class="postbox cmb-row cmb-repeatable-grouping" data-iterator="' + cmb.idNumber + '">' + $row.html() + "</div>");
        $oldRow.after($newRow), cmb.afterRowInsert($newRow), $table.find(".cmb-repeatable-grouping").length <= 1 ? $table.find(".cmb-remove-group-row").prop("disabled", !0) : $table.find(".cmb-remove-group-row").prop("disabled", !1), $table.trigger("cmb2_add_row", $newRow)
    }, cmb.addAjaxRow = function (evt) {
        evt.preventDefault();
        var $self = $(this), $table = $id($self.data("selector")), $emptyrow = $table.find(".empty-row"), prevNum = parseInt($emptyrow.find("[data-iterator]").data("iterator"));
        cmb.idNumber = prevNum + 1;
        var $row = $emptyrow.clone();
        cmb.newRowHousekeeping($row).cleanRow($row, prevNum), $emptyrow.removeClass("empty-row hidden").addClass("cmb-repeat-row"), $emptyrow.after($row), cmb.afterRowInsert($row), $table.trigger("cmb2_add_row", $row), $table.find(".cmb-remove-row-button").removeClass("button-disabled")
    }, cmb.removeGroupRow = function (evt) {
        evt.preventDefault();
        var $self = $(this), $table = $id($self.data("selector")), $parent = $self.parents(".cmb-repeatable-grouping"), number = $table.find(".cmb-repeatable-grouping").length;
        number > 1 && ($table.trigger("cmb2_remove_group_row_start", $self), $parent.nextAll(".cmb-repeatable-grouping").find(cmb.repeatEls).each(cmb.updateNameAttr), $parent.remove(), 2 >= number ? $table.find(".cmb-remove-group-row").prop("disabled", !0) : $table.find(".cmb-remove-group-row").prop("disabled", !1), $table.trigger("cmb2_remove_row"))
    }, cmb.removeAjaxRow = function (evt) {
        evt.preventDefault();
        var $self = $(this);
        if (!$self.hasClass("button-disabled")) {
            var $parent = $self.parents(".cmb-row"), $table = $self.parents(".cmb-repeat-table"), number = $table.find(".cmb-row").length;
            number > 2 ? ($parent.hasClass("empty-row") && $parent.prev().addClass("empty-row").removeClass("cmb-repeat-row"), $self.parents(".cmb-repeat-table .cmb-row").remove(), 3 === number && $table.find(".cmb-remove-row-button").addClass("button-disabled"), $table.trigger("cmb2_remove_row")) : $self.addClass("button-disabled")
        }
    }, cmb.shiftRows = function (evt) {
        evt.preventDefault();
        var $self = $(this);
        $self.trigger("cmb2_shift_rows_enter", $self);
        var $parent = $self.parents(".cmb-repeatable-grouping"), $goto = $self.hasClass("move-up") ? $parent.prev(".cmb-repeatable-grouping") : $parent.next(".cmb-repeatable-grouping");
        if ($goto.length) {
            $self.trigger("cmb2_shift_rows_start", $self);
            var inputVals = [];
            $parent.find(cmb.repeatEls).each(function () {
                var val, $element = $(this), elType = $element.attr("type");
                val = $element.hasClass("cmb2-media-status") ? $element.html() : "checkbox" === elType || "radio" === elType ? $element.is(":checked") : "select" === $element.prop("tagName") ? $element.is(":selected") : $element.val(), inputVals.push({
                    val: val,
                    $: $element
                })
            }), $goto.find(cmb.repeatEls).each(function (index) {
                var val, $element = $(this), elType = $element.attr("type");
                if ($element.hasClass("cmb2-media-status")) {
                    var toRowId = $element.closest(".cmb-repeatable-grouping").attr("data-iterator"), fromRowId = inputVals[index].$.closest(".cmb-repeatable-grouping").attr("data-iterator");
                    val = $element.html(), $element.html(inputVals[index].val), inputVals[index].$.html(val), inputVals[index].$.find("input").each(function () {
                        var name = $(this).attr("name");
                        name = name.replace("[" + toRowId + "]", "[" + fromRowId + "]"), $(this).attr("name", name)
                    }), $element.find("input").each(function () {
                        var name = $(this).attr("name");
                        name = name.replace("[" + fromRowId + "]", "[" + toRowId + "]"), $(this).attr("name", name)
                    })
                } else"checkbox" === elType ? (inputVals[index].$.prop("checked", $element.is(":checked")), $element.prop("checked", inputVals[index].val)) : "radio" === elType ? ($element.is(":checked") && inputVals[index].$.attr("data-checked", "true"), inputVals[index].$.is(":checked") && $element.attr("data-checked", "true")) : "select" === $element.prop("tagName") ? (inputVals[index].$.prop("selected", $element.is(":selected")), $element.prop("selected", inputVals[index].val)) : (inputVals[index].$.val($element.val()), $element.val(inputVals[index].val))
            }), $parent.find("input[data-checked=true]").prop("checked", !0).removeAttr("data-checked"), $goto.find("input[data-checked=true]").prop("checked", !0).removeAttr("data-checked"), $self.trigger("cmb2_shift_rows_complete", $self)
        }
    }, cmb.initPickers = function ($timePickers, $datePickers, $colorPickers) {
        cmb.initTimePickers($timePickers), cmb.initDatePickers($datePickers), cmb.initColorPickers($colorPickers)
    }, cmb.initTimePickers = function ($selector) {
        $selector.length && ($selector.timepicker("destroy"), $selector.timepicker(cmb.defaults.time_picker))
    }, cmb.initDatePickers = function ($selector) {
        $selector.length && ($selector.datepicker("destroy"), $selector.datepicker(cmb.defaults.date_picker))
    }, cmb.initColorPickers = function ($selector) {
        $selector.length && ("object" == typeof jQuery.wp && "function" == typeof jQuery.wp.wpColorPicker ? $selector.wpColorPicker(cmb.defaults.color_picker) : $selector.each(function (i) {
            $(this).after('<div id="picker-' + i + '" style="z-index: 1000; background: #EEE; border: 1px solid #CCC; position: absolute; display: block;"></div>'), $id("picker-" + i).hide().farbtastic($(this))
        }).focus(function () {
            $(this).next().show()
        }).blur(function () {
            $(this).next().hide()
        }))
    }, cmb.makeListSortable = function () {
        var $filelist = cmb.metabox().find(".cmb2-media-status.cmb-attach-list");
        $filelist.length && $filelist.sortable({cursor: "move"}).disableSelection()
    }, cmb.maybeOembed = function (evt) {
        var $self = $(this), type = evt.type, m = {
            focusout: function () {
                setTimeout(function () {
                    cmb.spinner(".postbox .cmb2-metabox", !0)
                }, 2e3)
            }, keyup: function () {
                var betw = function (min, max) {
                    return evt.which <= max && evt.which >= min
                };
                (betw(48, 90) || betw(96, 111) || betw(8, 9) || 187 === evt.which || 190 === evt.which) && cmb.doAjax($self, evt)
            }, paste: function () {
                setTimeout(function () {
                    cmb.doAjax($self)
                }, 100)
            }
        };
        m[type]()
    }, cmb.resizeoEmbeds = function () {
        cmb.metabox().each(function () {
            var $self = $(this), $tableWrap = $self.parents(".inside"), isSide = $self.parents(".inner-sidebar").length || $self.parents("#side-sortables").length, isSmall = isSide, isSmallest = !1;
            if (!$tableWrap.length)return !0;
            var tableW = $tableWrap.width();
            cmb.styleBreakPoint > tableW && (isSmall = !0, isSmallest = cmb.styleBreakPoint - 62 > tableW), tableW = isSmall ? tableW : Math.round(.82 * $tableWrap.width() * .97);
            var newWidth = tableW - 30;
            if (!isSmall || isSide || isSmallest || (newWidth -= 75), newWidth > 639)return !0;
            var $embeds = $self.find(".cmb-type-oembed .embed-status"), $children = $embeds.children().not(".cmb2-remove-wrapper");
            return $children.length ? void $children.each(function () {
                var $self = $(this), iwidth = $self.width(), iheight = $self.height(), _newWidth = newWidth;
                $self.parents(".cmb-repeat-row").length && !isSmall && (_newWidth = newWidth - 91, _newWidth = 785 > tableW ? _newWidth - 15 : _newWidth);
                var newHeight = Math.round(_newWidth * iheight / iwidth);
                $self.width(_newWidth).height(newHeight)
            }) : !0
        })
    }, cmb.log = function () {
        l10n.script_debug && console && "function" == typeof console.log && console.log.apply(console, arguments)
    }, cmb.spinner = function ($context, hide) {
        hide ? $(".cmb-spinner", $context).hide() : $(".cmb-spinner", $context).show()
    }, cmb.doAjax = function ($obj) {
        var oembed_url = $obj.val();
        if (!(oembed_url.length < 6)) {
            var field_id = $obj.attr("id"), $context = $obj.closest(".cmb-td"), $embed_container = $context.find(".embed-status"), $embed_wrap = $context.find(".embed_wrap"), $child_el = $embed_container.find(":first-child"), oembed_width = $embed_container.length && $child_el.length ? $child_el.width() : $obj.width();
            cmb.log("oembed_url", oembed_url, field_id), cmb.spinner($context), $embed_wrap.html(""), setTimeout(function () {
                $(".cmb2-oembed:focus").val() === oembed_url && $.ajax({
                    type: "post",
                    dataType: "json",
                    url: l10n.ajaxurl,
                    data: {
                        action: "cmb2_oembed_handler",
                        oembed_url: oembed_url,
                        oembed_width: oembed_width > 300 ? oembed_width : 300,
                        field_id: field_id,
                        object_id: $obj.data("objectid"),
                        object_type: $obj.data("objecttype"),
                        cmb2_ajax_nonce: l10n.ajax_nonce
                    },
                    success: function (response) {
                        cmb.log(response), cmb.spinner($context, !0), $embed_wrap.html(response.data)
                    }
                })
            }, 500)
        }
    }, $(document).ready(cmb.init), cmb
}(window, document, jQuery);