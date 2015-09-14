angular.module('Kubicon')
    .directive('slider', function() {
        return {
            compile: function($scope) {
                var STEP_UP = 60;
                var ongoing = false;
                var currentIndex = 0;
                var slideWidth = 0;
                var slideHeight = 0;

                function setNextSlide(slide, index) {
                    if (slide) {
                        slide.x = slideWidth;
                        slide.active = false;
                    }
                }

                function setPrevSlide(slide, index) {
                    if (slide) {
                        slide.x = -1 * slideWidth;
                        slide.active = false;
                    }
                }

                function animateNextSlide(slide, index) {
                    if(slide) {
                        var $slide = $('#slider li:nth-child(' + (index + 1)+ ')');
                        $slide.animate({
                            'left': slideWidth + 'px'
                        }, 1000, function() {
                            slide.active = false;
                            resetSlide(getSliderContent($slide));
                        });
                    }
                }

                function animatePrevSlide(slide, index) {
                    var $slide = $('#slider li:nth-child(' + (index + 1)+ ')');
                    $slide.animate({
                        'left': -1 * slideWidth + 'px'
                    }, 1000, function() {
                        $slide.css("display", "none");
                        resetSlide(getSliderContent($slide));
                        slide.active = false;
                    });
                }

                function animateSlideUp(index) {
                    var $slide = $('#slider li:nth-child(' + (index + 1)+ ') p');
                    $slide.animate({
                        'margin-top': --slideHeight * STEP_UP + 'px'
                    }, 500);
                }

                function animateSlideDown(index) {
                    var $slide = $('#slider li:nth-child(' + (index + 1)+ ') p');
                    $slide.animate({
                        'margin-top': (slideHeight == 0 ? 0 : ++slideHeight) * STEP_UP + 'px'
                    }, 500);
                }

                function animateCurrentSlide(slide, index, direction) {
                    if(slide) {
                        ongoing = true;
                        var $slide = $('#slider li:nth-child(' + (index + 1)+ ')');

                        if (direction) {
                            $slide.css("left", slideWidth + "px");
                        } else {
                            $slide.css("left", -1 * slideWidth + "px");
                        }

                        slide.active = true;
                        $slide.css("display", "block");
                        $slide.animate({
                            "left": '0'
                        }, 1000, function() {
                            ongoing = false;
                        });
                    }
                }

                function resetSlide(slide) {
                    slide.css("margin-top", 0);
                    slideHeight = 0;
                }

                function getSlider(index) {
                    return $('#slider li:nth-child(' + (index + 1) + ')');
                }

                function getSliderContent(slider) {
                    return slider.find("p");
                }

                function getSliderContainerHeight(slider) {
                    return parseInt(slider.find(".description").css("height"));
                }

                function getSliderContentHeight(slider) {
                    return parseInt(slider.find("p").css("height"));
                }

                function createScope($scope, $element) {
                    if ($scope.slides && $scope.slides.length > 0) {
                        for (var i = 0; i < $scope.slides.length; i++) {
                            $scope.slides[i].active = false;
                            $scope.slides[i].x = 0;
                            $scope.slides[i].y = 0;
                        }
                        
                        $scope.slides[0].active = true;
                    }

                    $scope.getSlideCss = function(slide) {
                        return '{ "display": ' + (slide.active ? '"block"' : '"none"')  +
                            ', "left": "' + slide.x + 'px", "top": "' + slide.y + 'px", "width": "' + (slideWidth - 70) + 'px' + '" }';
                    };

                    $scope.slideNext = function() {
                        if (ongoing) {
                            return;
                        }

                        var nextIndex = (currentIndex + 1 >= $scope.slides.length ? 0 : currentIndex + 1);
                        var currentSlide = $scope.slides[currentIndex];
                        var nextSlide = $scope.slides[nextIndex];

                        animatePrevSlide(currentSlide, currentIndex);
                        animateCurrentSlide(nextSlide, nextIndex, true);
                        currentIndex = nextIndex;
                    };

                    $scope.slidePrev = function() {
                        if (ongoing) {
                            return;
                        }

                        var prevIndex = (currentIndex - 1 < 0 ? $scope.slides.length - 1 : currentIndex - 1);
                        var currentSlide = $scope.slides[currentIndex];
                        var prevSlide = $scope.slides[prevIndex];

                        animateNextSlide(currentSlide, currentIndex);
                        animateCurrentSlide(prevSlide, prevIndex, false);
                        currentIndex = prevIndex;
                    };

                    $scope.slideUp = function() {
                        if (ongoing) {
                            return;
                        }

                        var slider = getSlider(currentIndex);
                        var contentHeight = getSliderContentHeight(slider);
                        var containerHeight = getSliderContainerHeight(slider);

                        if (contentHeight < containerHeight + (STEP_UP * slideHeight * -1)) {
                            return;
                        }

                        animateSlideUp(currentIndex);
                    };

                    $scope.slideDown = function() {
                        if (ongoing) {
                            return;
                        }

                        animateSlideDown(currentIndex);
                    };
                }

                function init($element, $scope) {
                    slideWidth = $element[0].offsetWidth;
                    var prevSlideIndex = $scope.slides.length - 1;
                    var nextSlideIndex = 1;
                    var prevSlide = $scope.slides[prevSlideIndex];
                    var nextSlide = $scope.slides[nextSlideIndex];

                    setPrevSlide(prevSlide, prevSlideIndex);
                    setNextSlide(nextSlide, nextSlideIndex);
                }

                return function($scope, $element) {
                    createScope($scope, $element);
                    init($element, $scope);
                };
            }
        };
    });