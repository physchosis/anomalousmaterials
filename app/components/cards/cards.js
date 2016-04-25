(function(angular) {
    'use strict';

    function CardsController($http, $location, $sce) {
        this.$sce = $sce;
        console.info('SCE', $sce);
        this.cardTempPath = 'components/cards/default.html';
        this.cardData = this.ampdata || {};
        this.validCardData = false;
        this.embededVideoData = {};
        this.ampType = '';
        console.info('CardInfo', this.cardData);
        this.mainURL = $location.absUrl();
        this.cardID = this.gencardID();
        this.showMaximize = true;
        this.showMinimize = false;
        this.showCard = true;
        this.showAmpSource = false;
        this.prevScrollTop = 0;
        // Location of AMP File
        var fetchURL = (typeof this.ampdata.amp_url != 'undefined') ? this.ampdata.amp_url : null;
        this.$http = $http;

        this.sourceTypes = [{
            id: 'MARKDOWN',
            name: 'Github (project markdown readme files etc)'
        }, {
            id: 'FILES',
            name: 'File Materials'
        }, {
            id: 'VIDEO',
            name: 'Videos like Youtube etc'
        }, {
            id: 'WEBSITE',
            name: 'Blog on website/new website etc'
        }, {
            id: 'EXPLOIT',
            name: 'Example Hak/Crack/Exploit'
        }, {
            id: 'DEFENSE',
            name: 'New Patch/Defense/Block'
        }];
        this.categoryOptions = [{
            id: 'PROJECT',
            name: 'Project'
        }, {
            id: 'ARTICLE',
            name: 'Article'
        }, {
            id: 'GUIDE',
            name: 'Guide (teach/mentor)'
        }, {
            id: 'BLOG',
            name: 'BLOG To Follow'
        }, {
            id: 'EXPLOIT',
            name: 'New Hak/Crack/Exploit'
        }, {
            id: 'DEFENSE',
            name: 'New Patch/Defense/Block'
        }];

        /*
      
        this.formModel = {
              "amp_author": "@authorOFMaterialNameTeamWTFUwant",
              "amp_creator": "@creatorThatIsAddingIt",
              "amp_created": "1234567890",
              "amp_status": "draft",
              "amp_title": "Attack surfaces for zeus botnet",
              "amp_background_text": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
              "amp_tags": "article, guides, rants, complaints",
              "amp_category": {"id": "PROJECT", "name": "Project"},
              "amp_image_url": "https://i.ytimg.com/vi/0xRCYmbvfEs/maxresdefault.jpg",
              "amp_thumb_url": null,
              "amp_name": "Guide To Attack Surfaces",
              "amp_contact": {
                  "twitter": "@author",
                  "email": "someone@someplace.com"

              },
              "amp_source": {
                  "created": "1458385143",
                  "updated": "1458385143",
                  "origin": "Twitter",
                  "location": "Github",
                  "type": {"id": "MARKRDOWN", "name": "Github (project markdown readme files etc)"},
                  "file_name": "README.md",
                  "file_desc": "Blog Entry Point",
                  "file_size": "1mb",
                  "integrity": "sha384-vZ2WR....",
                  "crossorigin": "anonymous",
                  "base_url": "https://raw.githubusercontent.com/",
                  "view_url": "https://github.com/markdown-it/markdown-it",
                  "file_url": "https://raw.githubusercontent.com/markdown-it/markdown-it/master/README.md",
                  "base_branch": "markdown-it/markdown-it",
                  "branch_name": "master",
                  "branch_list": []
              }
          }
          */

        // if there is a amp url 
        // then fetch the amp data file
        if (fetchURL) {
            this.fetchAMPMetaDataFile(fetchURL);
        }
        else {
            // ELSE try to process the existing card
            //console.info('', fetchURL);
            this.processMetaDataForCard(this);
        }
        var self = this;
        var elmToReplace = 'amp_background_text_' + self.cardID;
        setTimeout(function() {
            self.markdownText(self.cardData.amp_background_text, elmToReplace);
        }, 4000);

    }

    CardsController.prototype.markdownText = function(text, elmIDToPlace) {
        var md = window.markdownit();
        var markdownData = text;
        var result = md.render(markdownData);
        console.log('markdownText', result);
        var myElm = '#' + elmIDToPlace;
        console.log('MyElm', myElm);
        $(myElm).html(result);

    }

    // Not in use yet
    CardsController.prototype.getAMPCategory = function(self) {
        var ampData = self.cardData;
        var curCategory = self.ampdata.amp_category;
        var dataType = self.getDataType(curCategory);
        // check to see if amp category matches something
        if (dataType == 'string') {

        }
        else {

        }
    }

    CardsController.prototype.getAMPSourceType = function(self) {
        var ampData = self.cardData;
        console.log('AMPDATA', ampData);
        var curSourceType = ampData.amp_source.type;
        console.log('CurSourceType', curSourceType);
        var dataType = self.getDataType(curSourceType);
        console.log('DataType', dataType);
        console.log('SourceTypes', self.sourceTypes);
        // check to see if amp category matches something
        if (dataType == 'string') {
            for (var i = 0; i < self.sourceTypes.length; i++) {
                console.log('SourceTypes', self.sourceTypes[i].id.toUpperCase(), curSourceType.toUpperCase());
                if (self.sourceTypes[i].id.toUpperCase() == curSourceType.toUpperCase() || self.sourceTypes[i].name.toUpperCase() == curSourceType.toUpperCase()) {
                    return self.sourceTypes[i];
                }
            }
        }
        else if (dataType == 'object') {
            for (var i = 0; i < self.sourceTypes.length; i++) {
                if (self.sourceTypes[i].id.toUpperCase() == curSourceType.id.toUpperCase() || self.sourceTypes[i].name == curSourceType.name.toUpperCase()) {
                    return self.sourceTypes[i];
                }
            }
        }
    }




    CardsController.prototype.fetchAMPMetaDataFile = function(fetchURL) {
        var self = this;
        this.$http({
            method: 'GET',
            url: fetchURL
        }).then(function successCallback(response) {
            console.log('Response Returned', response);
            self.cardData = response.data;
            self.processMetaDataForCard(self);

        }, function errorCallback(response) {
            console.error(response);
        });
    }

    // Simple check to see if ampdata is semi-valid
    // checks by looking at keys in ampdata
    CardsController.prototype.isAMPDataValid = function(self) {
        var ampData = self.cardData;
        var mustHaveStandardFields = ['amp_creator', 'amp_background_text', 'amp_title', 'amp_source'];
        var mustHaveAMPSourceFields = ['type', 'view_url']
        var stCount = 0;
        for (var i = 0; i < mustHaveStandardFields.length; i++) {
            if (mustHaveStandardFields[i] in ampData && ampData[i] != '') {
                stCount++;
            }
        }
        if (stCount != mustHaveStandardFields.length) {
            console.error('AMP Data Invalid', count, mustHaveStandardFields.length);
            this.validCardData = false;
            return false;

        }
        var ampSourceCount = 0;
        for (var i = 0; i < mustHaveAMPSourceFields.length; i++) {
            if (mustHaveAMPSourceFields[i] in ampData.amp_source && ampData.amp_source[i] != '') {
                ampSourceCount++;
            }
        }

        if (ampSourceCount == mustHaveAMPSourceFields.length) {
            this.validCardData = true;
            return true;
        }
        else {
            console.error('AMP Data Invalid', ampSourceCount, mustHaveAMPSourceFields.length)
            this.validCardData = false;
            return false;
        }
    }

    CardsController.prototype.processMetaDataForCard = function(self) {
        var curSourceType = self.getAMPSourceType(self);
        var ampData = self.cardData;
        if (!curSourceType) {
            console.info('CurSourceType', curSourceType);
            console.error('Error: AMP Data Bad', self.cardData);
            return;
        }
        else if (self.isAMPDataValid(self) != true) {
            console.error('Error: AMP Data Bad', self.cardData);
            return;
        }
        self.cardDate = self.convertToLocalDate(self.cardData.amp_created);
        console.log('##########CurSourceType', curSourceType, self.cardData);
        /*
        {id: 'MARKRDOWN', name: 'Github (project markdown readme files etc)'},
            {id: 'FILES', name: 'File Materials'},
            {id: 'VIDEO', name: 'Videos like Youtube etc'},
            {id: 'WEBSITE', name: 'Blog on website/new website etc'},
            {id: 'EXPLOIT', name: 'Example Hak/Crack/Exploit'},
            {id: 'DEFENSE', name: 'New Patch/Defense/Block'}
         */
        if (typeof curSourceType.id != 'undefined' && curSourceType.id == 'MARKDOWN') {
            self.ampType = 'MARKDOWN';
            self.processMarkdownType(self);
        }
        else if (typeof curSourceType.id != 'undefined' && curSourceType.id == 'VIDEO') {
            self.ampType = 'VIDEO';
            self.processVideoType(self);
        }

    }

    CardsController.prototype.processMarkdownType = function(self) {
        var fileURL = self.cardData.amp_source.base_url + self.cardData.amp_source.base_branch + '/' + self.cardData.amp_source.branch_name + '/' + self.cardData.amp_source.file_name;
        console.log('fileURL', fileURL);
        if (self.cardData.amp_source.base_url == '' || self.cardData.amp_source.base_branch == '' || self.cardData.amp_source.branch_name == '' || self.cardData.amp_source.file_name == '') {
            console.log('CardData', self.cardData);
            if (self.cardData.amp_source.view_url.match(/.*raw.githubusercontent.com.*\.md/)) {
                fileURL = self.cardData.amp_source.view_url;
            }
            else {
                fileURL = '';
            }
        }
        if (fileURL != '') {
            self.$http({
                method: 'GET',
                url: fileURL
            }).then(function successCallback(newResp) {
                var md = window.markdownit();
                var markdownData = newResp.data;
                var result = md.render(markdownData);


                //self.cardData.markdownData = $('<div/>').html(result).text();
                //console.log('RESULT', result);
                var markdownElm = '#markdown_data_' + self.cardID;
                console.log('CARDID', markdownElm);
                console.log('MarkdownElm', markdownElm);

                setTimeout(function() {
                    $(markdownElm).html(result);

                    //console.log('AHREF', $(markdownElm).find('a'));
                    $(markdownElm).find('a').each(function(index, element) {
                        //console.log(this);
                        //$( element ).attr('target', '_blank');
                    })
                }, 1000);


            }, function errorCallback(newResp) {
                console.error(newResp);
            });
        }

    }

    // Need to fix this so that it appropriately 
    // Creates the right embeds
    CardsController.prototype.processVideoType = function(self) {
        self.embededVideoData.view_url = self.cardData.amp_source.view_url;
        var extVidURL = self.$sce.trustAsResourceUrl(self.embededVideoData.view_url);
        console.error('######################## SCE', self.embededVideoData, self.$sce, extVidURL);
        self.embededVideoData.video_url = extVidURL;

        if (self.embededVideoData.view_url.match(/.*youtube.*/) ||
            self.embededVideoData.view_url.match(/.*yt.be.*/) ||
            self.embededVideoData.view_url.match(/.*ytimg.*/) ||
            self.embededVideoData.view_url.match(/.*youtubeeducation.*/)) {
            self.embededVideoData.src_type = 'youtube';
        }
        else if (self.embededVideoData.view_url.match(/.*vimeo.*/)) {
            self.embededVideoData.src_type = 'vimeo';
        }
        var videoHolderElm = '#titlebar_video_iframe_' + self.cardID;
        $(videoHolderElm).removeClass('video_frame_hide');
        $(videoHolderElm).addClass('video_frame_show');
        $(videoHolderElm).height('100%');
        $(videoHolderElm).width('100%');
        console.error('VideoHolderElm', $(videoHolderElm).attr('class'));;




    }

    CardsController.prototype.convertToLocalDate = function(epoc) {
        var utcSeconds = epoc;
        console.info('Epoc', utcSeconds);
        var respDate = new Date(utcSeconds * 1000)

        return respDate.toString();
    }
    CardsController.prototype.toggleAmpDetails = function(cardID) {
        // if showcard visibile hide it
        this.showCard = (this.showCard == true) ? false : true;
        this.showAmpSource = (this.showAmpSource == true) ? false : true;
    }

    CardsController.prototype.maximize = function(cardID) {
        var cardElm = '#ampcard_' + cardID;
        var contentElm = '#card_content_' + cardID;
        var cardSource = '#card_source_' + cardID;
        var cardHeader = '#ampcard_header_' + cardID;
        this.showMaximize = false;
        this.showMinimize = true;
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        var navBarCurHeight = $('#navbar').height();
        var cardHeaderHeight = $(cardHeader).height();
        var cardTop = navBarCurHeight;
        $(cardElm).css({
            'position': 'absolute',
            'z-index': '1000',
            'top': cardTop,
            'left': '0px',
            'margin': '0px',
            'width': windowWidth,
            'height': windowHeight
        });
        $(cardElm).height(windowHeight - navBarCurHeight - 5 + 'px');
        $(cardElm).width(document.body.scrollWidth - 5 + 'px');
        $(contentElm).css({
            'overflow-y': 'scroll',
            'max-height': windowHeight - navBarCurHeight - cardHeaderHeight - 75 + 'px'
        });
        $(contentElm).height(windowHeight - navBarCurHeight - cardHeaderHeight - 75 + 'px');
        $(cardSource).height(windowHeight - navBarCurHeight - cardHeaderHeight - 75 + 'px');
        $(cardSource).css({
            'overflow-y': 'scroll',
            'max-height': windowHeight - navBarCurHeight - cardHeaderHeight - 75 + 'px'
        });
        this.prevScrollTop = $(window).scrollTop();
        $(window).scrollTop(0);
    }

    CardsController.prototype.minimize = function(cardID) {
        var cardElm = '#ampcard_' + cardID;
        var contentElm = '#card_content_' + cardID;
        var cardSource = '#card_source_' + cardID;
        this.showMaximize = true;
        this.showMinimize = false;
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        $(cardElm).removeAttr('style');
        $(cardElm).css({
            'position': 'relative',
            'width': '100%',
            'height': '100%'
        });
        $(contentElm).removeAttr('style');
        $(contentElm).css({
            'overflow-y': 'scroll',
            'max-height': '200px'
        });
        $(cardSource).removeAttr('style');
        $(cardSource).css({
            'overflow-y': 'scroll',
            'max-height': '200px'
        });
        // reset view
        this.showCard = true;
        this.showAmpSource = false;
        $(window).scrollTop(this.prevScrollTop);

    }

    CardsController.prototype.gencardID = function() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    CardsController.prototype.getDataType = function(data) {
        if (typeof data === 'string') {
            return 'string';
        }
        else if (typeof data === 'object') {
            return 'object';
        }
    }


    angular.module('ampApp').component('ampcards', {
        templateUrl: 'components/cards/cards.html',
        controller: CardsController,
        controllerAs: "vm",
        bindings: {
            ampdata: '='
        }
    });
})(window.angular);