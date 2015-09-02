angular.module('Kubicon')
    .directive('slider', function() {
        return {
            compile: function() {
                var ongoing = false;
                var currentIndex = 0;
                var slideWidth = 0;

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
                        });
                    }
                }

                function animatePrevSlide(slide, index) {
                    var $slide = $('#slider li:nth-child(' + (index + 1)+ ')');
                    $slide.animate({
                        'left': -1 * slideWidth + 'px'
                    }, 1000, function() {
                        $slide.css("display", "none");
                        slide.active = false;
                    });
                }

                function animateCurrentSlide(slide, index, direction) {
                    if(slide){
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

                function createScope($scope) {
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
                    createScope($scope);
                    init($element, $scope);
                };
            }
        };
    });