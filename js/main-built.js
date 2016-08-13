 /*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */

/*!
 * VERSION: 1.14.1
 * DATE: 2014-10-16
 * UPDATES AND DOCS AT: http://www.greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/

/*!
 * VERSION: 1.14.1
 * DATE: 2014-10-16
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */

/*!
 * VERSION: 1.14.2
 * DATE: 2014-10-18
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */

/* ScrollMagic v1.3.0 | (c) 2014 Jan Paepke (@janpaepke) | license & info: http://janpaepke.github.io/ScrollMagic */

function version(t) {
    window.console && console.log(t)
}
function dbg(t) {
    window.console && console.log(t)
}
(window), {Controller: n,Scene: r}
}), define("hasDocumentResized", ["jquery"], function(t) {
    return function() {
        var e = t(document).outerHeight(!0), i = this.documentHeight !== e;
        return i && (this.documentHeight = e), i
    }
}), define("scrollingAssets", ["jquery", "scrollMagic", "hasDocumentResized", "windowListener"], function(t, e, i, n) {
    "use strict";
    var r = 250, s = "asset-waypoint";
    return {$waypoints: null,$rightColumns: null,scrollMagicController: null,scrollMagicScenes: [],hasBeenSetup: null,init: function() {
            this.scrollMagicController = new e.Controller, this.$waypoints = t('[data-waypoint="true"]'), this.$rightColumns = t(".grid-even-split--right"), this.hasBeenSetup = !1, n.breakpointDesktop() && (this.addClassToWaypoints(), this.setUpAssets());
            var s = !1;
            t(window).resize(t.proxy(function() {
                s = !0
            }, this)), setInterval(t.proxy(function() {
                if (i() || s) {
                    s = !1;
                    var e = this.scrollMagicController.scrollPos();
                    n.breakpointDesktop() && (this.hasBeenSetup || (this.addClassToWaypoints(), this.setUpAssets()));
                    var r = t("body").is(".menu-open, .transitioning, .transition-end");
                    r || (this.recalculateScenePositions(), this.resetAssetPositionsToStartPoint(), this.resetAssetPositionsPassedScrollPositionToEndPoint(e))
                }
            }, this), r)
        },resetAssetPositionsToStartPoint: function() {
            t(".in-waypoint").css("top", 0)
        },resetAssetPositionsPassedScrollPositionToEndPoint: function(e) {
            this.getWaypointsPastPosition(e).each(t.proxy(function(e, i) {
                var n = t(i), r = this.getAssetForWaypoint(n);
                r.css("top", r.data("scroll-end-position"))
            }, this))
        },recalculateScenePositions: function() {
            for (var t = 0; t < this.scrollMagicScenes.length; t++)
                for (var e = this.scrollMagicScenes[t], i = 0; i < e.length; i++) {
                    var n = e[i], r = n.triggerElement(), s = this.getWaypointForAsset(r);
                    this.updateAssetPositionFromWaypoint(r, s), this.createSceneForAsset(r)
                }
        },getAssetForWaypoint: function(e) {
            return t(".in-waypoint").filter(function(i, n) {
                var r = t(n);
                return r.data("order") === e.data("order") && r.data("row") === e.data("row")
            }).first()
        },getWaypointForAsset: function(e) {
            return this.$waypoints.filter(function(i, n) {
                var r = t(n);
                return r.data("order") === e.data("order") && r.data("row") === e.data("row")
            }).first()
        },getWaypointsPastPosition: function(e) {
            return this.$waypoints.filter(function(i, n) {
                var r = t(n);
                return r.offset().top < e
            })
        },addClassToWaypoints: function() {
            this.$rightColumns.find(this.$waypoints).closest(".asset").addClass(s)
        },setUpAssets: function() {
            this.hasBeenSetup === !1 && this.$rightColumns.each(t.proxy(function(e, i) {
                t(i).find(this.$waypoints).each(t.proxy(function(n, r) {
                    var s = t(r);
                    s.data("order", n).data("row", e);
                    var o = t(i).siblings(".grid-waypoint-holder").find(t(".waypoint-display"));
                    this.addAssetsToWaypointContainerWithIndex(o, n, e, s)
                }, this))
            }, this)), this.hasBeenSetup = !0, t(window).trigger("scrolling-assets:setup")
        },getAssetFromContainerForOrderAndRow: function(e, i, n) {
            return e.filter(function(e, i) {
                return t(i).data("order") === e && t(i).data("row") === n
            })
        },createOrReturnAssetForWaypointContainerAtIndex: function(e, i, n) {
            var r = this.getAssetFromContainerForOrderAndRow(e, i, n);
            if (0 === r.length) {
                var s = t('<div class="asset in-waypoint"></div>').data("order", i).data("row", n);
                r = e.append(s).find(".asset").eq(i)
            }
            return r
        },addAssetsToWaypointContainerWithIndex: function(t, e, i, n) {
            var r = this.createOrReturnAssetForWaypointContainerAtIndex(t, e, i);
            this.updateAssetPositionFromWaypoint(r, n), this.displayAssetForWaypoint(r, n), this.createSceneForAsset(r)
        },getPositionsForAsset: function(t, e) {
            var i = e.position().top, n = 0, r = e.parents(".grid-even-split");
            return n = e.closest(".asset").nextAll(".asset-waypoint").first().length ? e.closest(".asset").nextAll(".asset-waypoint").first().position().top - (e.position().top + t.outerHeight(!0)) : r.outerHeight(!0) - (i + t.outerHeight(!0)), 0 == e.data("order") && (n += i, i = 0), {startPosition: i,endPosition: n > 0 ? n : 0}
        },updateAssetPositionFromWaypoint: function(t, e) {
            var i = this.getPositionsForAsset(t, e);
            this.positionAsset({$asset: t,$waypoint: e,startPosition: i.startPosition,endPosition: i.endPosition})
        },positionAsset: function(t) {
            t.$asset.css("top", t.startPosition).data("scroll-start-position", t.startPosition).data("scroll-end-position", t.endPosition), t.$waypoint.data("scroll-start-position", t.startPosition).data("scroll-end-position", t.endPosition)
        },displayAssetForWaypoint: function(t, e) {
            var i = e.data("waypoint-type");
            "image" == i ? this.displayImageWaypointForAsset(t, e) : "quote" == i ? this.displayQuoteWaypointForAsset(t, e) : "video" == i && this.displayVideoWaypointForAsset(t, e)
        },displayImageWaypointForAsset: function(t, e) {
            var i = e.attr("src");
            t.addClass("asset-image").css("background-image", "url(" + i + ")")
        },displayQuoteWaypointForAsset: function(t, e) {
            var i = e.clone();
            t.addClass("asset-quote").prepend(i)
        },displayVideoWaypointForAsset: function(t, e) {
            var i = e.clone(), n = e.find("img").attr("src");
            t.addClass("asset-video").prepend(i), t.find(".video-placeholder").css("background-image", "url(" + n + ")").find("img").remove()
        },getSceneForRowAndOrder: function(t, e) {
            return t in this.scrollMagicScenes && e in this.scrollMagicScenes[t] ? this.scrollMagicScenes[t][e] : null
        },setSceneForRowAndOrder: function(t, e, i) {
            e in this.scrollMagicScenes || (this.scrollMagicScenes[e] = []), this.scrollMagicScenes[e][i] = t
        },createSceneForAsset: function(t) {
            var i = this.getSceneForRowAndOrder(t.data("row"), t.data("order"));
            i || (i = new e.Scene({triggerHook: "onLeave"}), i.setPin(t, {pinnedClass: "stuck",pushFollowers: !1}).addTo(this.scrollMagicController)), i.triggerPosition(t.data("scroll-start-position")), i.duration(t.data("scroll-end-position")), i.triggerElement(t), this.setSceneForRowAndOrder(i, t.data("row"), t.data("order")), this.scrollMagicController.update(), t.parent().css("top", t.data("scroll-start-position"))
        }}
}), define("videoAsset", ["jquery"], function(t) {
    return {init: function() {
            t(window).on("scrolling-assets:setup", t.proxy(function() {
                this.addModal(), this.playClick()
            }, this)), this.playClick()
        },addModal: function() {
            var e = '<div class="modal"><div class="modal-center"></div></div>', i = t(".waypoint-display .asset-video");
            i.each(function(i, n) {
                var r = t(n), s = r.find(".video");
                r.after(e), r.parent().find(".modal .modal-center").prepend(s)
            })
        },playClick: function() {
            var e = t(".asset-video"), i = t(".asset-video .play-button"), n = t("body"), r = "video-modal", s = "reveal-video";
            i.on("click", t.proxy(function(e) {
                var i = t(e.currentTarget), o = i.closest(".asset");
                e.stopPropagation(), o.hasClass("in-waypoint") ? n.addClass(r) : o.addClass(s)
            }, this)), this.modalClose(n, r), this.playClose(n, e, r, s)
        },modalClose: function(e, i) {
            t(document).keyup(function(e) {
                27 == e.keyCode && t("body").removeClass(i)
            }), t(".modal").on("click", function() {
                t("body").removeClass(i)
            })
        },playClose: function(e, i, n, r) {
            t(".video-placeholder").on("click", function(s) {
                if (console.log("click"), e.hasClass(n)) {
                    {
                        t(s.currentTarget)
                    }
                    s.stopPropagation()
                }
                i.hasClass(r) && i.removeClass(r)
            })
        }}
}), define("homeImageSplit", ["jquery", "windowListener"], function(t) {
    return {init: function() {
            this.getAsset()
        },getAsset: function() {
            var e = t(".homepage-promo-split"), i = e.find('[data-waypoint="true"]'), n = i.attr("src");
            e.find(".waypoint-display .asset").css("background-image", "url(" + n + ")")
        }}
}), define("backgroundImage", ["jquery"], function(t) {
    return {init: function() {
            this.backgroundImage()
        },backgroundImage: function() {
            t(".teaser .teaser--thumbnail-container").each(function() {
                var e = t(this).find("img").attr("src");
                t(this).css("background-image", "url(" + e + ")")
            }), t(".split--container .split--half img").each(function() {
                t(this).parents(".split--container").find(".text-image-display").css("background-image", "url(" + t(this).attr("src") + ")")
            })
        }}
}), define("tabbing", ["jquery"], function(t) {
    return {init: function() {
            this.focus(), t(".view-blog .view-filters .views-exposed-form .form-radios .form-item input").wrapInner("<a></a>")
        },focus: function() {
            t("a.numiko-logo").focus(function() {
                t("body").removeClass("menu-open")
            })
        }}
})