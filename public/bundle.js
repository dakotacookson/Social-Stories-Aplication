(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _api = _interopRequireDefault(require("../api"));

var _StoryEditForm = _interopRequireDefault(require("./StoryEditForm"));

var _StoryForm = _interopRequireDefault(require("./StoryForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Storys = {
  //StoryObj  is pased in far down the line but it comes directly from a for each loop
  StoryBuilder(StoryObj) {
    //Creates an element
    const StoryArticle = document.querySelector(".Story"); //Creates an element

    const StoryName = document.createElement("h2"); //Creates an element

    const StoryPicture = document.createElement("img"); //Creates an element

    const StoryPicture2 = document.createElement("img"); //Creates an element

    const StoryPicture3 = document.createElement("img"); //sets  1 of 3var to the pic url in database

    const VAR = StoryObj.picture; //sets  1 of 3var to the pic url in database

    const VAR2 = StoryObj.picture2; //sets  1 of 3var to the pic url in database

    const VAR3 = StoryObj.picture3; //sets source to var  1

    StoryPicture.setAttribute("src", `${VAR}`); //sets source to var  2

    StoryPicture2.setAttribute("src", `${VAR2}`); //sets source to var  3

    StoryPicture3.setAttribute("src", `${VAR3}`); //Creates an element

    const Story = document.createElement("p"); //sets class

    Story.setAttribute("class", "paragraph"); //Creates an element

    const StoryOutputSection = document.createElement("article"); //sets id to the object id in the database

    StoryOutputSection.setAttribute("Id", `${StoryObj.id}`); //sets class

    StoryOutputSection.setAttribute("Class", "Arti1"); //appends the fragment to the greater pieice

    StoryArticle.appendChild(StoryOutputSection); //appends the  the even smaller fragmentns to the fragment

    StoryOutputSection.appendChild(StoryName); //appends the  the even smaller fragmentns to the fragment

    StoryOutputSection.appendChild(StoryPicture); //appends the  the even smaller fragmentns to the fragment

    StoryOutputSection.appendChild(StoryPicture2); //appends the  the even smaller fragmentns to the fragment

    StoryOutputSection.appendChild(StoryPicture3); //appends the  the even smaller fragmentns to the fragment

    StoryOutputSection.appendChild(Story); //sets  the text to a piece in the database

    StoryName.textContent = StoryObj.title; //sets  the text to a piece in the database

    StoryPicture.textContent = StoryObj.picture; //sets  the text to a piece in the database

    StoryPicture2.textContent = StoryObj.picture2; //sets  the text to a piece in the database

    StoryPicture3.textContent = StoryObj.picture3; //sets  the text to a piece in the database

    Story.textContent = StoryObj.Text; //Creates an element

    const Back = document.createElement("button"); //sets class

    Back.setAttribute("Class", "BackButton"); //sets  the text

    Back.textContent = "Back"; //sets click event on back button when clicked

    Back.addEventListener("click", () => {
      // add the style of NONE to the queery and
      document.querySelector(".Arti1").style.display = "none"; //  run the functiion

      _StoryForm.default.StoryFormBuilder();
    }); //adds back button to fragment

    StoryOutputSection.appendChild(Back); //Creates an element

    const StoryEditButton = document.createElement("button"); //adds Edit button to fragment

    StoryOutputSection.appendChild(StoryEditButton); //sets text

    StoryEditButton.textContent = "Edit"; //sets class

    StoryEditButton.setAttribute("Class", "EditButton"); // creates a click event on edit button when clicked

    StoryEditButton.addEventListener("click", () => {
      // wipe the inner html of the button ellement
      StoryEditButton.innerHTML = " "; //set the style display of the button ellement to none

      StoryEditButton.style.display = "none"; //used to grabe specific ids

      let articleId = event.target.parentNode.id; //runs story form function and passes to paramaters

      _StoryEditForm.default.createAndAppendForm(StoryObj, articleId);
    });
    const StoryDeleteButton = document.createElement("button");
    StoryOutputSection.appendChild(StoryDeleteButton);
    StoryDeleteButton.textContent = "Delete";
    StoryDeleteButton.setAttribute("Class", "DeleteButton");
    StoryDeleteButton.addEventListener("click", () => {
      let StoryId2 = StoryObj.id;

      _api.default.deleteData(StoryId2).then(response => {
        const restart = document.querySelector(".Arti1");
        let titledelete = document.querySelector(`#Title--${StoryObj.id}`);
        titledelete.innerHTML = " ";
        titledelete.style.display = "none";
        restart.innerHTML = " ";
        document.querySelector(".Arti1").style.display = "none";
        document.querySelector(".Story").innerHTML = " ";

        _StoryForm.default.StoryFormBuilder(StoryObj);

        console.log(response);
      });
    });

    if (VAR == "") {
      StoryPicture.style.display = "none";
    }

    if (VAR2 == "") {
      StoryPicture2.style.display = "none";
    }

    if (VAR3 == "") {
      StoryPicture3.style.display = "none";
    }
  }

};
var _default = Storys;
exports.default = _default;

},{"../api":8,"./StoryEditForm":2,"./StoryForm":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _api = _interopRequireDefault(require("../api"));

var _listitorator = _interopRequireDefault(require("../Story/StoryList/listitorator"));

var _StoryForm = _interopRequireDefault(require("./StoryForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StoryEditForm = {
  createAndAppendForm(StoryObj, articleId) {
    let StoryNameField = document.createElement("p");
    StoryNameField.setAttribute("class", "selector");
    let StoryStorysField = document.createElement("p");
    StoryStorysField.setAttribute("class", "selector");
    let StoryPicturesField = document.createElement("p");
    StoryPicturesField.setAttribute("class", "selector");
    let StoryNameLabel = document.createElement("label");
    StoryNameLabel.textContent = " Title";
    let StoryNameInput = document.createElement("input");
    StoryNameInput.setAttribute("Class", "Input1");
    StoryNameInput.value = StoryObj.title;
    StoryNameField.appendChild(StoryNameInput);
    StoryNameField.appendChild(StoryNameLabel);
    let StoryPictureLabel = document.createElement("label");
    let StoryPictureLabel2 = document.createElement("label");
    let StoryPictureLabel3 = document.createElement("label");
    StoryPictureLabel.textContent = " Picture";
    StoryPictureLabel2.textContent = " Picture 2";
    StoryPictureLabel3.textContent = " Picture 3";
    let StoryPictureInput = document.createElement("input");
    StoryPictureInput.setAttribute("Class", "Input5");
    let StoryPictureInput2 = document.createElement("input");
    StoryPictureInput2.setAttribute("Class", "Input4");
    let StoryPictureInput3 = document.createElement("input");
    StoryPictureInput3.setAttribute("Class", "Input3");
    StoryPictureInput.value = StoryObj.picture;
    StoryPictureInput2.value = StoryObj.picture2;
    StoryPictureInput3.value = StoryObj.picture3;
    StoryPicturesField.appendChild(StoryPictureInput);
    StoryPicturesField.appendChild(StoryPictureLabel);
    StoryPicturesField.appendChild(StoryPictureInput2);
    StoryPicturesField.appendChild(StoryPictureLabel2);
    StoryPicturesField.appendChild(StoryPictureInput3);
    StoryPicturesField.appendChild(StoryPictureLabel3);
    let StoryStorysLabel = document.createElement("label");
    StoryStorysLabel.textContent = "Story";
    let StoryStorysInput = document.createElement("textarea");
    StoryStorysInput.setAttribute("Class", "Input2");
    StoryStorysInput.value = StoryObj.Text;
    StoryStorysField.appendChild(StoryStorysInput);
    StoryStorysField.appendChild(StoryStorysLabel);
    let updateButton = document.createElement("button");
    updateButton.textContent = "Update";
    let StoryItemArticle = document.querySelector(".Arti1");
    StoryItemArticle.innerHTML = " ";
    StoryItemArticle.appendChild(StoryNameField);
    StoryItemArticle.appendChild(StoryPicturesField);
    StoryItemArticle.appendChild(StoryStorysField);
    StoryItemArticle.appendChild(updateButton);
    updateButton.addEventListener("click", () => {
      const userId = sessionStorage.getItem("userId");
      const currentUserId = JSON.parse(userId);
      let editedStory = {
        title: StoryNameInput.value,
        picture: StoryPictureInput.value,
        picture2: StoryPictureInput2.value,
        picture3: StoryPictureInput3.value,
        Text: StoryStorysInput.value,
        userId: currentUserId
      };
      let name = document.querySelector(".Input1");
      console.log(name.value); //form validation using an if else statment

      if (name.value.length === 0) {
        alert("No Story!");
      } else {
        StoryEditForm.doitnow(articleId, editedStory, StoryObj);
      }
    });
  },

  doitnow(articleId, editedStory, StoryObj) {
    _StoryForm.default.StoryFormBuilder();

    _api.default.putExistingStory(articleId, editedStory, StoryObj).then(response => {
      console.log(response);
      document.querySelector(".Story").innerHTML = " ";
      document.querySelector(".Story2").innerHTML = " ";

      _listitorator.default.listStory2();
    });
  }

};
var _default = StoryEditForm;
exports.default = _default;

},{"../Story/StoryList/listitorator":5,"../api":8,"./StoryForm":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _api = _interopRequireDefault(require("../api"));

var _listitorator = _interopRequireDefault(require("./StoryList/listitorator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StoryFormStoryInput = document.createElement("input");
const StoryFormStorysInput = document.createElement("textarea");
const Picturesinput = document.createElement("input");
const Picturesinput2 = document.createElement("input");
const Picturesinput3 = document.createElement("input");
const StoryForm = {
  StoryFormBuilder() {
    const StoryArticle = document.querySelector(".Storyform");
    let StoryFormSection = document.querySelector(".stories");
    StoryArticle.append(StoryFormSection);
    const StoryFormHeader = document.createElement("h3");
    StoryFormHeader.setAttribute("Class", "StoryHeader");
    StoryFormSection.appendChild(StoryFormHeader);
    StoryFormHeader.textContent = "Add Story";
    StoryFormSection.appendChild(StoryFormStoryInput);
    StoryFormStoryInput.placeholder = "Story Name";
    StoryFormStoryInput.setAttribute("Class", "Storyinput");
    StoryFormSection.appendChild(Picturesinput);
    Picturesinput.textContent = "Add Picture";
    Picturesinput.placeholder = "Picture URL";
    Picturesinput.setAttribute("Class", "Picinput1");
    StoryFormSection.appendChild(Picturesinput2);
    Picturesinput2.textContent = "Add Picture";
    Picturesinput2.placeholder = "Picture URL";
    Picturesinput2.setAttribute("Class", "Picinput2");
    StoryFormSection.appendChild(Picturesinput3);
    Picturesinput3.textContent = "Add Picture";
    Picturesinput3.placeholder = "Picture URL";
    Picturesinput3.setAttribute("Class", "Picinput3");
    StoryFormSection.appendChild(StoryFormStorysInput);
    StoryFormStorysInput.placeholder = "Story";
    let break1 = document.createElement("br");
    StoryFormSection.appendChild(break1);
    StoryFormStorysInput.setAttribute("Class", "Storytext");
    const addStoryButton = document.createElement("button");
    addStoryButton.setAttribute("class", "selctorbutton1");
    StoryFormSection.appendChild(addStoryButton);
    addStoryButton.textContent = "Add Story";
    addStoryButton.addEventListener("click", () => {
      //rudementry form validation
      let nameipnut = document.querySelector(".Storyinput");

      if (nameipnut.value.length == 0) {
        alert("No Story!");
      } else {
        nameipnut.value.length > 0;
        StoryForm.addStoryToJSON();
      }
    });
  },

  addStoryToJSON() {
    console.log("Button Works");
    const StoryTitle = StoryFormStoryInput.value;
    const StoryStorys = StoryFormStorysInput.value;
    const Pictures2 = Picturesinput.value;
    const Pictures3 = Picturesinput2.value;
    const Pictures = Picturesinput3.value;
    const currentUserId = sessionStorage.getItem("userId");
    const userId = JSON.parse(currentUserId);
    let newStory = {
      title: StoryTitle,
      picture: Pictures,
      picture2: Pictures2,
      picture3: Pictures3,
      Text: StoryStorys,
      userId: userId
    };
    console.log(newStory);

    _api.default.postNewData("Stories", newStory).then(response => {
      document.querySelector(".Story").innerHTML = " ";
      document.querySelector(".Story2").innerHTML = " ";
      console.log(response); //cleareing and reentering placeholder values

      document.querySelector(".Storyinput").value = "";
      document.querySelector(".Storyinput").placeholder = "Story Name";
      document.querySelector(".Storytext").value = "";
      document.querySelector(".Storytext").placeholder = "Story";
      document.querySelector(".Picinput1").value = "";
      document.querySelector(".Picinput1").placeholder = "Picture URL";
      document.querySelector(".Picinput2").value = "";
      document.querySelector(".Picinput2").placeholder = "Picture URL";
      document.querySelector(".Picinput3").value = "";
      document.querySelector(".Picinput3").placeholder = "Picture URL";

      _listitorator.default.listStory2();
    });
  }

};
var _default = StoryForm;
exports.default = _default;

},{"../api":8,"./StoryList/listitorator":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _StoryBuilder = _interopRequireDefault(require("../StoryBuilder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StorysList3 = {
  StoryListBuilder5(StoryObj) {
    const StoryArticle = document.querySelector(".Story2");
    const StoryName2 = document.createElement("h2");
    StoryName2.setAttribute("id", `Title--${StoryObj.id}`);
    StoryName2.setAttribute("Class", "Title0");
    const StoryOutputSection = document.createElement("article");
    StoryOutputSection.appendChild(StoryName2);
    StoryArticle.appendChild(StoryOutputSection);
    StoryName2.textContent = StoryObj.title;
    StoryName2.addEventListener("click", () => {
      let Storiescontainer = document.querySelector(".stories");
      Storiescontainer.innerHTML = " ";
      let clearcontent = document.querySelector(".Story");
      clearcontent.innerHTML = " ";

      _StoryBuilder.default.StoryBuilder(StoryObj);
    });
  }

};
var _default = StorysList3;
exports.default = _default;

},{"../StoryBuilder":1}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _api = _interopRequireDefault(require("../../api"));

var _listbuilder = _interopRequireDefault(require("./listbuilder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Storylist2 = {
  listStory2() {
    _api.default.getData("Stories").then(allStories => {
      allStories.forEach(StoryObj => {
        const userId = sessionStorage.getItem("userId");
        const currentUserId = JSON.parse(userId);

        if (StoryObj.userId === currentUserId) {
          _listbuilder.default.StoryListBuilder5(StoryObj);
        }
      });
    });
  }

};
var _default = Storylist2;
exports.default = _default;

},{"../../api":8,"./listbuilder":4}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _searchlistresults = _interopRequireDefault(require("./searchlistresults"));

var _api = _interopRequireDefault(require("../../api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const serchbar = {
  searchbar2() {
    let storycontainer = document.querySelector(".Story3");
    const searchinput = document.createElement("Input");
    searchinput.textContent = "Add Search";
    searchinput.setAttribute("Id", "Searchbar");
    searchinput.placeholder = "Search";
    let searchbutton = document.createElement("button");
    let br = document.createElement("br");
    searchbutton.setAttribute("Class", "SearchButton");
    searchbutton.textContent = "Search";
    storycontainer.append(searchinput);
    storycontainer.append(br);
    storycontainer.append(searchbutton);
    searchbutton.addEventListener("click", () => {
      document.querySelector(".Story2").innerHTML = " ";
      let searchbarqueery = document.getElementById("Searchbar").value;

      _api.default.getData2(searchbarqueery); //a form of validation for the fetch call so it Will not  break


      if (searchbarqueery != " ") {
        searchbarqueery = " ";

        _searchlistresults.default.listStory4();
      }
    });
  }

};
var _default = serchbar;
exports.default = _default;

},{"../../api":8,"./searchlistresults":7}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _api = _interopRequireDefault(require("../../api"));

var _listbuilder = _interopRequireDefault(require("./listbuilder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Storylist4 = {
  listStory4() {
    let SearchInputValue = document.getElementById("Searchbar").value;

    _api.default.getData2(SearchInputValue).then(allStories => {
      allStories.forEach(Story => {
        const userId = sessionStorage.getItem("userId");
        const currentUserId = JSON.parse(userId);

        if (Story.userId === currentUserId) {
          _listbuilder.default.StoryListBuilder5(Story);
        }
      });
    });
  }

};
var _default = Storylist4;
exports.default = _default;

},{"../../api":8,"./listbuilder":4}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const API = {
  getData(resource) {
    return fetch(`http://pipsocial.herokuapp.com/api/database.json${resource}`).then(response => response.json());
  },

  getData3(resource) {
    return fetch(`http://pipsocial.herokuapp.com/api/database.jsonStories/${resource}`).then(response => response.json());
  },

  getData2(resource) {
    return fetch(`http://pipsocial.herokuapp.com/api/database.jsonStories?title_like=${resource}`).then(response => response.json());
  },

  getPayloadData(resource, payload) {
    return fetch(`http://pipsocial.herokuapp.com/api/database.json${resource}/${payload}`).then(response => response.json());
  },

  postNewData(resource, payload) {
    return fetch(`http://pipsocial.herokuapp.com/api/database.json${resource}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
  },

  // put  fetch call passing in the paramaters Story id and story to edit wich are variables im converting the object Story to edit into a reavble json string
  putExistingStory(Storyid, StoryToEdit) {
    return fetch(`http://pipsocial.herokuapp.com/api/database.jsonStories/${Storyid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(StoryToEdit)
    });
  },

  deleteData(resource) {
    return fetch(`http://pipsocial.herokuapp.com/api/database.jsonStories/${resource}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

};
var _default = API;
exports.default = _default;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

let MD5 = function (string) {
  function RotateLeft(lValue, iShiftBits) {
    return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
  }

  function AddUnsigned(lX, lY) {
    var lX4, lY4, lX8, lY8, lResult;
    lX8 = lX & 0x80000000;
    lY8 = lY & 0x80000000;
    lX4 = lX & 0x40000000;
    lY4 = lY & 0x40000000;
    lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);

    if (lX4 & lY4) {
      return lResult ^ 0x80000000 ^ lX8 ^ lY8;
    }

    if (lX4 | lY4) {
      if (lResult & 0x40000000) {
        return lResult ^ 0xC0000000 ^ lX8 ^ lY8;
      } else {
        return lResult ^ 0x40000000 ^ lX8 ^ lY8;
      }
    } else {
      return lResult ^ lX8 ^ lY8;
    }
  }

  function F(x, y, z) {
    return x & y | ~x & z;
  }

  function G(x, y, z) {
    return x & z | y & ~z;
  }

  function H(x, y, z) {
    return x ^ y ^ z;
  }

  function I(x, y, z) {
    return y ^ (x | ~z);
  }

  function FF(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  ;

  function GG(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  ;

  function HH(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  ;

  function II(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  ;

  function ConvertToWordArray(string) {
    var lWordCount;
    var lMessageLength = string.length;
    var lNumberOfWords_temp1 = lMessageLength + 8;
    var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
    var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
    var lWordArray = Array(lNumberOfWords - 1);
    var lBytePosition = 0;
    var lByteCount = 0;

    while (lByteCount < lMessageLength) {
      lWordCount = (lByteCount - lByteCount % 4) / 4;
      lBytePosition = lByteCount % 4 * 8;
      lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
      lByteCount++;
    }

    lWordCount = (lByteCount - lByteCount % 4) / 4;
    lBytePosition = lByteCount % 4 * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
  }

  ;

  function WordToHex(lValue) {
    var WordToHexValue = "",
        WordToHexValue_temp = "",
        lByte,
        lCount;

    for (lCount = 0; lCount <= 3; lCount++) {
      lByte = lValue >>> lCount * 8 & 255;
      WordToHexValue_temp = "0" + lByte.toString(16);
      WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
    }

    return WordToHexValue;
  }

  ;

  function Utf8Encode(string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);

      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode(c >> 6 | 192);
        utftext += String.fromCharCode(c & 63 | 128);
      } else {
        utftext += String.fromCharCode(c >> 12 | 224);
        utftext += String.fromCharCode(c >> 6 & 63 | 128);
        utftext += String.fromCharCode(c & 63 | 128);
      }
    }

    return utftext;
  }

  ;
  var x = Array();
  var k, AA, BB, CC, DD, a, b, c, d;
  var S11 = 7,
      S12 = 12,
      S13 = 17,
      S14 = 22;
  var S21 = 5,
      S22 = 9,
      S23 = 14,
      S24 = 20;
  var S31 = 4,
      S32 = 11,
      S33 = 16,
      S34 = 23;
  var S41 = 6,
      S42 = 10,
      S43 = 15,
      S44 = 21;
  string = Utf8Encode(string);
  x = ConvertToWordArray(string);
  a = 0x67452301;
  b = 0xEFCDAB89;
  c = 0x98BADCFE;
  d = 0x10325476;

  for (k = 0; k < x.length; k += 16) {
    AA = a;
    BB = b;
    CC = c;
    DD = d;
    a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
    d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
    c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
    b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
    a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
    d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
    c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
    b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
    a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
    d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
    c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
    b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
    a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
    d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
    c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
    b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
    a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
    d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
    c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
    b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
    a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
    d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
    c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
    b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
    a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
    d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
    c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
    b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
    a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
    d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
    c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
    b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
    a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
    d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
    c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
    b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
    a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
    d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
    c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
    b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
    a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
    d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
    c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
    b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
    a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
    d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
    c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
    b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
    a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
    d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
    c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
    b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
    a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
    d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
    c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
    b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
    a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
    d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
    c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
    b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
    a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
    d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
    c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
    b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
    a = AddUnsigned(a, AA);
    b = AddUnsigned(b, BB);
    c = AddUnsigned(c, CC);
    d = AddUnsigned(d, DD);
  }

  var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
  return temp.toLowerCase();
};

var _default = MD5;
exports.default = _default;

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _api = _interopRequireDefault(require("./api"));

var _specificpage = _interopRequireDefault(require("./specificpage"));

var _hash = _interopRequireDefault(require("./hash"));

var _register = _interopRequireDefault(require("./register"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userNameInput = document.createElement("input"); // creates an input field for username

const passwordInput = document.createElement("input"); // creates an input field for password

const registrationPage = document.querySelector(".output__registration"); // grabs a class on the dom

const loginPage = document.querySelector(".output__login"); // grabs a class on the dom

registrationPage.style.display = "none"; // changes the  display style of the element to none

const login = {
  createAndAppendLoginInput() {
    // creates an h3 tag to use as the header
    const LoginHeader = document.createElement("h3"); // adds text to the h3 tag

    LoginHeader.textContent = "Welcome To P.I.P"; // set the type of the username input field to text

    userNameInput.type = "text"; // adds a place holder of text for the user so they can see an example of what to type in

    userNameInput.placeholder = "username"; // sets the type of input to password thusly obfiscating the password from view

    passwordInput.type = "password"; // adds a place holder of text for the user so they can see an example of what to type in

    passwordInput.placeholder = "password"; // appends item to loginpage wich is a class on the dom

    loginPage.appendChild(LoginHeader); // appends item to loginpage wich is a class on the dom

    loginPage.appendChild(userNameInput); // appends item to loginpage wich is a class on the dom

    loginPage.appendChild(passwordInput); //creates a button for login

    const loginButton = document.createElement("button"); // adds text to the button for login

    loginButton.textContent = "login"; //creates a button for register

    const registerButton = document.createElement("button"); // adds text to the button for register

    registerButton.textContent = "register"; // appends item to loginpage wich is a class on the dom

    loginPage.appendChild(loginButton); // appends item to loginpage wich is a class on the dom

    loginPage.appendChild(registerButton); //  event listiner that directly leads to a function

    loginButton.addEventListener("click", this.getUserData); //  event listiner that directly leads to a function

    registerButton.addEventListener("click", this.replaceWithRegistrationForm);
  },

  //function called on click event loginButton.addEventListener("click"
  getUserData() {
    // sets a variable to the value of the username input field
    const username = userNameInput.value; // sets a variable to the value of the password input field

    const password = passwordInput.value; // grabs all the data and passes in users as the paramater

    _api.default.getData("users") // once it has al the users
    .then(allUsers => {
      // set a variable to 1
      let usersProcessed = 1; // for each user

      allUsers.forEach(user => {
        // set a variable equal to a hash of the  user name  and  password in conjuction with the MD5 function
        let passhash = (0, _hash.default)(password + (0, _hash.default)(username)); // checks if the username and password match what is in the databse

        if (username === user.userName && passhash === user.password) {
          // if it is it sets the user id of the matching user id ionto session storage
          sessionStorage.setItem("userId", user.id); //then sets the var userid to the userid in session storage we just made

          let userId = sessionStorage.getItem("userId"); //then sets session storage user name to the username in the database

          sessionStorage.setItem("userName", user.userName); //the loads the specific user page based on the user id paramater

          loadUserSpecificPage(userId); // checks to see if the variable useres proccesed wich starts at 1 curentl equals the lentgh of the all users if it doesnt then
        } else if (usersProcessed === allUsers.length) {
          alert("Username/password invalid. If new user, please register.");
          console.log(password);
        } else {
          // it procededs to incrimente until one of the above 2 if else or if statments are matched
          usersProcessed++;
        }

        ;

        function loadUserSpecificPage() {
          //runs the user specific function
          _specificpage.default.specificuser();
        }
      });
    });
  },

  replaceWithRegistrationForm() {
    //grabs the  class on the dom
    const registrationPage = document.querySelector(".output__registration"); //sets the element's inner html to an empty string

    registrationPage.innerHTML = " "; //then runs the create regestration form function

    _register.default.createAndAppendRegistrationForm(); //sets the display style of the reg form to block


    registrationPage.style.display = "block"; //grabs the  class on the dom

    const loginPage = document.querySelector(".output__login"); //sets the display style of the login form to none

    loginPage.style.display = "none";
  },

  replaceWithLoginForm() {
    //grabs the  class on the dom
    const loginPage = document.querySelector(".output__login"); // sets the inner html of the element to an empty string

    loginPage.innerHTML = " "; // creates the login form

    login.createAndAppendLoginInput(); //grabs the  class on the dom

    const registrationPage = document.querySelector(".output__registration"); //sets the display style of the login form to Block

    loginPage.style.display = "block"; //sets the display style of the reg form to None

    registrationPage.style.display = "none"; //grabs the  class on the dom

    const Story4 = document.querySelector(".Story4"); //grabs the  class on the dom

    const Header2 = document.querySelector(".header2"); //grabs the  class on the dom

    const logout = document.querySelector(".output__logout"); //grabs the  class on the dom

    document.querySelector(".stories").innerHTML = " "; //sets the display style of the element  to None

    Story4.style.display = "none"; //sets the display style of the element  to None

    Header2.style.display = "none"; //sets the display style of the element  to None

    logout.style.display = "none";
  }

};
var _default = login;
exports.default = _default;

},{"./api":8,"./hash":9,"./register":13,"./specificpage":14}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _login = _interopRequireDefault(require("./login"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const logout = {
  createAndAppendLogout() {
    const outputElement = document.querySelector(".output__logout");
    let logoutButton = document.createElement("button");
    logoutButton.textContent = "Log Out";
    logoutButton.setAttribute("class", "logout");
    logoutButton.addEventListener("click", this.handleLogout);
    outputElement.appendChild(logoutButton);
  },

  handleLogout() {
    document.querySelector(".header123").style.display = "none";
    document.querySelector(".stories").innerHTML = " ";
    document.querySelector(".stories").style.display = "none";
    sessionStorage.clear();

    _login.default.replaceWithLoginForm();
  }

};
var _default = logout;
exports.default = _default;

},{"./login":10}],12:[function(require,module,exports){
"use strict";

var _login = _interopRequireDefault(require("./login"));

var _specificpage = _interopRequireDefault(require("./specificpage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (sessionStorage.userId === undefined) {
  _login.default.createAndAppendLoginInput();

  document.querySelector(".header123").style.display = "none";
  document.querySelector(".stories").style.display = "none";
  document.querySelector(".output__logout").style.display = "none";
}

if (sessionStorage.userId >= 1) {
  _specificpage.default.specificuser();
}

},{"./login":10,"./specificpage":14}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _api = _interopRequireDefault(require("./api"));

var _login = _interopRequireDefault(require("./login"));

var _hash = _interopRequireDefault(require("./hash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userNameInput = document.createElement("input");
const userPasswordInput = document.createElement("input");
const userEmailInput = document.createElement("input");
const createNewUser = document.createElement("button");
const backbutton = document.createElement("button");
const registrationForm = {
  createAndAppendRegistrationForm() {
    const registerContainer = document.querySelector(".output__registration");
    const registerHeader = document.createElement("h3");
    registerContainer.appendChild(registerHeader);
    registerHeader.textContent = "Register User";
    userNameInput.type = "text";
    userPasswordInput.type = "password";
    userEmailInput.type = "email";
    userNameInput.placeholder = "Input UserName";
    userPasswordInput.placeholder = "Create Password";
    userEmailInput.placeholder = "Input Email Address";
    createNewUser.textContent = "Register User";
    backbutton.textContent = "Back To Login";
    registerContainer.appendChild(userNameInput);
    registerContainer.appendChild(userPasswordInput);
    registerContainer.appendChild(userEmailInput);
    registerContainer.appendChild(createNewUser);
    registerContainer.appendChild(backbutton);
    createNewUser.addEventListener("click", this.formvalidation);
    backbutton.addEventListener("click", this.GoBack);
  },

  formvalidation() {
    if (userNameInput.value.length == 0 || userPasswordInput.value.length == 0 || userEmailInput.value.length == 0) {
      alert("No Story!");
    } else {
      userNameInput.value.length > 0 || userPasswordInput.value.length > 0 || userEmailInput.value.length > 0;
      registrationForm.registerUser();
    }
  },

  registerUser() {
    const userNameValue = userNameInput.value;
    const userPasswordValue = userPasswordInput.value;
    const userEmailValue = userEmailInput.value; //once the value is goten this function hashes it before its saved to the DB

    let passhash = (0, _hash.default)(userPasswordValue + (0, _hash.default)(userNameValue));
    let newUserToSave = {
      userName: userNameValue,
      password: passhash,
      email: userEmailValue
    };

    _api.default.postNewData("users", newUserToSave);

    _login.default.replaceWithLoginForm();
  },

  GoBack() {
    _login.default.replaceWithLoginForm();
  }

};
var _default = registrationForm;
exports.default = _default;

},{"./api":8,"./hash":9,"./login":10}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logout = _interopRequireDefault(require("./logout"));

var _listitorator = _interopRequireDefault(require("./Story/StoryList/listitorator"));

var _StoryForm = _interopRequireDefault(require("./Story/StoryForm"));

var _searchbar = _interopRequireDefault(require("./Story/StoryList/searchbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let userpage = {
  specificuser() {
    const Story4 = document.querySelector(".Story4");
    const Story2 = document.querySelector(".Story2");
    const Story3 = document.querySelector(".Story3");
    const Header2 = document.querySelector(".header2");
    const logout2 = document.querySelector(".output__logout");
    const loginPage = document.querySelector(".output__login");
    loginPage.style.display = "none";
    document.querySelector(".stories").style.display = "block";
    document.querySelector(".header123").style.display = "flex";
    Story2.innerHTML = " ";
    Story3.innerHTML = " ";

    _listitorator.default.listStory2();

    _searchbar.default.searchbar2();

    Story4.style.display = "flex";

    _StoryForm.default.StoryFormBuilder();

    document.querySelector(".Storyform").style.display = "block";
    let currentUsername = sessionStorage.getItem("userName");
    let userheader = document.querySelector(".header2");
    userheader.innerHTML = "Welcome " + currentUsername;
    Header2.style.display = "block";
    logout2.innerHTML = " ";

    _logout.default.createAndAppendLogout();

    logout2.style.display = "block"; // var egg = new Egg();
    // egg.addCode("M,E,T,A,L", function() {
    //     jQuery("#egggif").fadeIn(500, function() {
    //       window.setTimeout(function() { jQuery("#egggif").hide(); }, 5000);
    //     });
    //   })
    //   .addHook(function(){
    //   let  stylesheet = document.querySelector(".stylesheet")
    //   stylesheet.setAttribute("href" , "styles/Alt.CSS")
    // alert("Unlocked Metal Mode")
    //   }).listen();
    //   var egg2 = new Egg();
    // egg2.addCode("S,E,A", function() {
    //     jQuery("#egggif2").fadeIn(500, function() {
    //       window.setTimeout(function() { jQuery("#egggif2").hide(); }, 5000);
    //     });
    //   })
    //   .addHook(function(){
    // alert("Unlocked Motion Sick Mode")
    // let  stylesheet = document.querySelector(".stylesheet")
    // stylesheet.setAttribute("href" , "styles/maincssrotate.css")
    //   }).listen();
    //   var egg3 = new Egg();
    //   egg3.addCode("T,A,R,D,I,S", function() {
    //       jQuery("#egggif3").fadeIn(500, function() {
    //         window.setTimeout(function() { jQuery("#egggif3").hide(); }, 5000);
    //       });
    //     })
    //     .addHook(function(){
    //   alert("Im the Doctor")
    //   let  stylesheet = document.querySelector(".stylesheet")
    //   stylesheet.setAttribute("href" , "styles/maincsstardis.css")
    //     }).listen();
    //  var egg4 = new Egg();
    //  egg4.addCode("up,up,down,down,left,right,left,right,b,a", function() {
    //    jQuery("#egggif4").fadeIn(500, function() {
    //        window.setTimeout(function() { jQuery("#egggif4").hide(); }, 5000);
    //      });
    //    })
    //    .addHook(function(){
    //  alert("Code Accepted")
    //    }).listen();
  }

};
var _default = userpage;
exports.default = _default;

},{"./Story/StoryForm":3,"./Story/StoryList/listitorator":5,"./Story/StoryList/searchbar":6,"./logout":11}]},{},[12])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL1N0b3J5L1N0b3J5QnVpbGRlci5qcyIsIi4uL3NjcmlwdHMvU3RvcnkvU3RvcnlFZGl0Rm9ybS5qcyIsIi4uL3NjcmlwdHMvU3RvcnkvU3RvcnlGb3JtLmpzIiwiLi4vc2NyaXB0cy9TdG9yeS9TdG9yeUxpc3QvbGlzdGJ1aWxkZXIuanMiLCIuLi9zY3JpcHRzL1N0b3J5L1N0b3J5TGlzdC9saXN0aXRvcmF0b3IuanMiLCIuLi9zY3JpcHRzL1N0b3J5L1N0b3J5TGlzdC9zZWFyY2hiYXIuanMiLCIuLi9zY3JpcHRzL1N0b3J5L1N0b3J5TGlzdC9zZWFyY2hsaXN0cmVzdWx0cy5qcyIsIi4uL3NjcmlwdHMvYXBpLmpzIiwiLi4vc2NyaXB0cy9oYXNoLmpzIiwiLi4vc2NyaXB0cy9sb2dpbi5qcyIsIi4uL3NjcmlwdHMvbG9nb3V0LmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIiwiLi4vc2NyaXB0cy9yZWdpc3Rlci5qcyIsIi4uL3NjcmlwdHMvc3BlY2lmaWNwYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBOztBQUNBOztBQUNBOzs7O0FBQ0EsTUFBTSxNQUFNLEdBQUc7QUFDWDtBQUNBLEVBQUEsWUFBWSxDQUFDLFFBQUQsRUFBVztBQUNuQjtBQUNBLFVBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCLENBQXJCLENBRm1CLENBR25COztBQUNBLFVBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQWxCLENBSm1CLENBS25COztBQUNBLFVBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQXJCLENBTm1CLENBT25COztBQUNBLFVBQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQXRCLENBUm1CLENBU25COztBQUNBLFVBQU0s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LENBQUw7QUFDeEIsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QixHQUF4QixFQUE2QixVQUE3QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QixHQUF4QixFQUE2QixVQUE3QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QixHQUF4QixFQUE2QixVQUE3QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QixHQUF4QixFQUE2QixVQUE3QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QixHQUF4QixFQUE2QixVQUE3QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QixHQUF4QixFQUE2QixVQUE3QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QixHQUF4QixFQUE2QixVQUE3QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QixHQUF4QixFQUE2QixTQUE3QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QixHQUF4QixFQUE2QixVQUE3QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QixHQUF4QixFQUE2QixVQUE3QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QixHQUF4QixFQUE2QixVQUE3QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QixHQUF4QixFQUE2QixVQUE3QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QixHQUF4QixFQUE2QixVQUE3QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QixHQUF4QixFQUE2QixVQUE3QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QixHQUF4QixFQUE2QixVQUE3QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QixHQUF4QixFQUE2QixVQUE3QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixTQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QixHQUF4QixFQUE2QixVQUE3QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QixHQUF4QixFQUE2QixVQUE3QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QixHQUF4QixFQUE2QixVQUE3QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QixHQUF4QixFQUE2QixVQUE3QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QixHQUF4QixFQUE2QixVQUE3QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QixHQUF4QixFQUE2QixVQUE3QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QixHQUF4QixFQUE2QixVQUE3QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QixHQUF4QixFQUE2QixVQUE3QixDQUFOO0FBQ0EsSUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUws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Q0FBYyxPQUFkLEdBQXdCLE9BQXhCO0FBQ0EsSUFBQSxPQUFPLENBQUMsU0FBUixHQUFvQixHQUFwQjs7QUFDQSxvQkFBTyxxQkFBUDs7QUFDQSxJQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsT0FBZCxHQUF3QixPQUF4QixDQXZCaUIsQ0F5QmpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDOztBQXhFVyxDQUFmO2VBMEVlLFEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgQVBJIGZyb20gXCIuLi9hcGlcIlxyXG5pbXBvcnQgU3RvcnlFZGl0Rm9ybSBmcm9tIFwiLi9TdG9yeUVkaXRGb3JtXCJcclxuaW1wb3J0IFN0b3J5Rm9ybSBmcm9tIFwiLi9TdG9yeUZvcm1cIlxyXG5jb25zdCBTdG9yeXMgPSB7XHJcbiAgICAvL1N0b3J5T2JqICBpcyBwYXNlZCBpbiBmYXIgZG93biB0aGUgbGluZSBidXQgaXQgY29tZXMgZGlyZWN0bHkgZnJvbSBhIGZvciBlYWNoIGxvb3BcclxuICAgIFN0b3J5QnVpbGRlcihTdG9yeU9iaikge1xyXG4gICAgICAgIC8vQ3JlYXRlcyBhbiBlbGVtZW50XHJcbiAgICAgICAgY29uc3QgU3RvcnlBcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5TdG9yeVwiKVxyXG4gICAgICAgIC8vQ3JlYXRlcyBhbiBlbGVtZW50XHJcbiAgICAgICAgY29uc3QgU3RvcnlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICAgIC8vQ3JlYXRlcyBhbiBlbGVtZW50XHJcbiAgICAgICAgY29uc3QgU3RvcnlQaWN0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAvL0NyZWF0ZXMgYW4gZWxlbWVudFxyXG4gICAgICAgIGNvbnN0IFN0b3J5UGljdHVyZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIC8vQ3JlYXRlcyBhbiBlbGVtZW50XHJcbiAgICAgICAgY29uc3QgU3RvcnlQaWN0dXJlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgLy9zZXRzICAxIG9mIDN2YXIgdG8gdGhlIHBpYyB1cmwgaW4gZGF0YWJhc2VcclxuICAgICAgICBjb25zdCBWQVIgPSBTdG9yeU9iai5waWN0dXJlO1xyXG4gICAgICAgIC8vc2V0cyAgMSBvZiAzdmFyIHRvIHRoZSBwaWMgdXJsIGluIGRhdGFiYXNlXHJcbiAgICAgICAgY29uc3QgVkFSMiA9IFN0b3J5T2JqLnBpY3R1cmUyO1xyXG4gICAgICAgIC8vc2V0cyAgMSBvZiAzdmFyIHRvIHRoZSBwaWMgdXJsIGluIGRhdGFiYXNlXHJcbiAgICAgICAgY29uc3QgVkFSMyA9IFN0b3J5T2JqLnBpY3R1cmUzO1xyXG4gICAgICAgIC8vc2V0cyBzb3VyY2UgdG8gdmFyICAxXHJcbiAgICAgICAgU3RvcnlQaWN0dXJlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBgJHtWQVJ9YClcclxuICAgICAgICAvL3NldHMgc291cmNlIHRvIHZhciAgMlxyXG4gICAgICAgIFN0b3J5UGljdHVyZTIuc2V0QXR0cmlidXRlKFwic3JjXCIsIGAke1ZBUjJ9YClcclxuICAgICAgICAvL3NldHMgc291cmNlIHRvIHZhciAgM1xyXG4gICAgICAgIFN0b3J5UGljdHVyZTMuc2V0QXR0cmlidXRlKFwic3JjXCIsIGAke1ZBUjN9YClcclxuICAgICAgICAvL0NyZWF0ZXMgYW4gZWxlbWVudFxyXG4gICAgICAgIGNvbnN0IFN0b3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgLy9zZXRzIGNsYXNzXHJcbiAgICAgICAgU3Rvcnkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwYXJhZ3JhcGhcIilcclxuICAgICAgICAvL0NyZWF0ZXMgYW4gZWxlbWVudFxyXG4gICAgICAgIGNvbnN0IFN0b3J5T3V0cHV0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xyXG4gICAgICAgIC8vc2V0cyBpZCB0byB0aGUgb2JqZWN0IGlkIGluIHRoZSBkYXRhYmFzZVxyXG4gICAgICAgIFN0b3J5T3V0cHV0U2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJJZFwiLCBgJHtTdG9yeU9iai5pZH1gKVxyXG4gICAgICAgIC8vc2V0cyBjbGFzc1xyXG4gICAgICAgIFN0b3J5T3V0cHV0U2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJDbGFzc1wiLCBcIkFydGkxXCIpXHJcbiAgICAgICAgLy9hcHBlbmRzIHRoZSBmcmFnbWVudCB0byB0aGUgZ3JlYXRlciBwaWVpY2VcclxuICAgICAgICBTdG9yeUFydGljbGUuYXBwZW5kQ2hpbGQoU3RvcnlPdXRwdXRTZWN0aW9uKTtcclxuICAgICAgICAvL2FwcGVuZHMgdGhlICB0aGUgZXZlbiBzbWFsbGVyIGZyYWdtZW50bnMgdG8gdGhlIGZyYWdtZW50XHJcbiAgICAgICAgU3RvcnlPdXRwdXRTZWN0aW9uLmFwcGVuZENoaWxkKFN0b3J5TmFtZSk7XHJcbiAgICAgICAgLy9hcHBlbmRzIHRoZSAgdGhlIGV2ZW4gc21hbGxlciBmcmFnbWVudG5zIHRvIHRoZSBmcmFnbWVudFxyXG4gICAgICAgIFN0b3J5T3V0cHV0U2VjdGlvbi5hcHBlbmRDaGlsZChTdG9yeVBpY3R1cmUpO1xyXG4gICAgICAgIC8vYXBwZW5kcyB0aGUgIHRoZSBldmVuIHNtYWxsZXIgZnJhZ21lbnRucyB0byB0aGUgZnJhZ21lbnRcclxuICAgICAgICBTdG9yeU91dHB1dFNlY3Rpb24uYXBwZW5kQ2hpbGQoU3RvcnlQaWN0dXJlMik7XHJcbiAgICAgICAgLy9hcHBlbmRzIHRoZSAgdGhlIGV2ZW4gc21hbGxlciBmcmFnbWVudG5zIHRvIHRoZSBmcmFnbWVudFxyXG4gICAgICAgIFN0b3J5T3V0cHV0U2VjdGlvbi5hcHBlbmRDaGlsZChTdG9yeVBpY3R1cmUzKTtcclxuICAgICAgICAvL2FwcGVuZHMgdGhlICB0aGUgZXZlbiBzbWFsbGVyIGZyYWdtZW50bnMgdG8gdGhlIGZyYWdtZW50XHJcbiAgICAgICAgU3RvcnlPdXRwdXRTZWN0aW9uLmFwcGVuZENoaWxkKFN0b3J5KTtcclxuICAgICAgICAvL3NldHMgIHRoZSB0ZXh0IHRvIGEgcGllY2UgaW4gdGhlIGRhdGFiYXNlXHJcbiAgICAgICAgU3RvcnlOYW1lLnRleHRDb250ZW50ID0gU3RvcnlPYmoudGl0bGU7XHJcbiAgICAgICAgLy9zZXRzICB0aGUgdGV4dCB0byBhIHBpZWNlIGluIHRoZSBkYXRhYmFzZVxyXG4gICAgICAgIFN0b3J5UGljdHVyZS50ZXh0Q29udGVudCA9IFN0b3J5T2JqLnBpY3R1cmU7XHJcbiAgICAgICAgLy9zZXRzICB0aGUgdGV4dCB0byBhIHBpZWNlIGluIHRoZSBkYXRhYmFzZVxyXG4gICAgICAgIFN0b3J5UGljdHVyZTIudGV4dENvbnRlbnQgPSBTdG9yeU9iai5waWN0dXJlMjtcclxuICAgICAgICAvL3NldHMgIHRoZSB0ZXh0IHRvIGEgcGllY2UgaW4gdGhlIGRhdGFiYXNlXHJcbiAgICAgICAgU3RvcnlQaWN0dXJlMy50ZXh0Q29udGVudCA9IFN0b3J5T2JqLnBpY3R1cmUzO1xyXG4gICAgICAgIC8vc2V0cyAgdGhlIHRleHQgdG8gYSBwaWVjZSBpbiB0aGUgZGF0YWJhc2VcclxuICAgICAgICBTdG9yeS50ZXh0Q29udGVudCA9IFN0b3J5T2JqLlRleHQ7XHJcbiAgICAgICAgLy9DcmVhdGVzIGFuIGVsZW1lbnRcclxuICAgICAgICBjb25zdCBCYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgICAgIC8vc2V0cyBjbGFzc1xyXG4gICAgICAgIEJhY2suc2V0QXR0cmlidXRlKFwiQ2xhc3NcIiwgXCJCYWNrQnV0dG9uXCIpXHJcbiAgICAgICAgLy9zZXRzICB0aGUgdGV4dFxyXG4gICAgICAgIEJhY2sudGV4dENvbnRlbnQgPSBcIkJhY2tcIlxyXG4gICAgICAgIC8vc2V0cyBjbGljayBldmVudCBvbiBiYWNrIGJ1dHRvbiB3aGVuIGNsaWNrZWRcclxuICAgICAgICBCYWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGFkZCB0aGUgc3R5bGUgb2YgTk9ORSB0byB0aGUgcXVlZXJ5IGFuZFxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLkFydGkxXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgLy8gIHJ1biB0aGUgZnVuY3RpaW9uXHJcbiAgICAgICAgICAgIFN0b3J5Rm9ybS5TdG9yeUZvcm1CdWlsZGVyKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vYWRkcyBiYWNrIGJ1dHRvbiB0byBmcmFnbWVudFxyXG4gICAgICAgIFN0b3J5T3V0cHV0U2VjdGlvbi5hcHBlbmRDaGlsZChCYWNrKTtcclxuXHJcbiAgICAgICAgIC8vQ3JlYXRlcyBhbiBlbGVtZW50XHJcbiAgICAgICAgY29uc3QgU3RvcnlFZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAvL2FkZHMgRWRpdCBidXR0b24gdG8gZnJhZ21lbnRcclxuICAgICAgICBTdG9yeU91dHB1dFNlY3Rpb24uYXBwZW5kQ2hpbGQoU3RvcnlFZGl0QnV0dG9uKTtcclxuICAgICAgICAvL3NldHMgdGV4dFxyXG4gICAgICAgIFN0b3J5RWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xyXG4gICAgICAgIC8vc2V0cyBjbGFzc1xyXG4gICAgICAgIFN0b3J5RWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJDbGFzc1wiLCBcIkVkaXRCdXR0b25cIilcclxuICAgICAgICAvLyBjcmVhdGVzIGEgY2xpY2sgZXZlbnQgb24gZWRpdCBidXR0b24gd2hlbiBjbGlja2VkXHJcbiAgICAgICAgU3RvcnlFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHdpcGUgdGhlIGlubmVyIGh0bWwgb2YgdGhlIGJ1dHRvbiBlbGxlbWVudFxyXG4gICAgICAgICAgICBTdG9yeUVkaXRCdXR0b24uaW5uZXJIVE1MID0gXCIgXCJcclxuICAgICAgICAgICAgLy9zZXQgdGhlIHN0eWxlIGRpc3BsYXkgb2YgdGhlIGJ1dHRvbiBlbGxlbWVudCB0byBub25lXHJcbiAgICAgICAgICAgIFN0b3J5RWRpdEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIC8vdXNlZCB0byBncmFiZSBzcGVjaWZpYyBpZHNcclxuICAgICAgICAgICAgbGV0IGFydGljbGVJZCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmlkO1xyXG4gICAgICAgICAgICAvL3J1bnMgc3RvcnkgZm9ybSBmdW5jdGlvbiBhbmQgcGFzc2VzIHRvIHBhcmFtYXRlcnNcclxuICAgICAgICAgICAgU3RvcnlFZGl0Rm9ybS5jcmVhdGVBbmRBcHBlbmRGb3JtKFN0b3J5T2JqLCBhcnRpY2xlSWQpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBTdG9yeURlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgU3RvcnlPdXRwdXRTZWN0aW9uLmFwcGVuZENoaWxkKFN0b3J5RGVsZXRlQnV0dG9uKTtcclxuICAgICAgICBTdG9yeURlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XHJcbiAgICAgICAgU3RvcnlEZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwiQ2xhc3NcIiwgXCJEZWxldGVCdXR0b25cIilcclxuICAgICAgICBTdG9yeURlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgU3RvcnlJZDIgPSBTdG9yeU9iai5pZFxyXG4gICAgICAgICAgICBBUEkuZGVsZXRlRGF0YShTdG9yeUlkMilcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5BcnRpMVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0aXRsZWRlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNUaXRsZS0tJHtTdG9yeU9iai5pZH1gKVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlZGVsZXRlLmlubmVySFRNTCA9IFwiIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVkZWxldGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdGFydC5pbm5lckhUTUwgPSBcIiBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuQXJ0aTFcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuU3RvcnlcIikuaW5uZXJIVE1MID0gXCIgXCJcclxuICAgICAgICAgICAgICAgICAgICBTdG9yeUZvcm0uU3RvcnlGb3JtQnVpbGRlcihTdG9yeU9iailcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAoVkFSID09IFwiXCIpIHtcclxuICAgICAgICAgICAgU3RvcnlQaWN0dXJlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoVkFSMiA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIFN0b3J5UGljdHVyZTIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChWQVIzID09IFwiXCIpIHtcclxuICAgICAgICAgICAgU3RvcnlQaWN0dXJlMy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU3RvcnlzIiwiaW1wb3J0IEFQSSBmcm9tIFwiLi4vYXBpXCJcclxuaW1wb3J0IFN0b3J5bGlzdDIgZnJvbSBcIi4uL1N0b3J5L1N0b3J5TGlzdC9saXN0aXRvcmF0b3JcIlxyXG5pbXBvcnQgU3RvcnlGb3JtIGZyb20gXCIuL1N0b3J5Rm9ybVwiXHJcbmNvbnN0IFN0b3J5RWRpdEZvcm0gPSB7XHJcbiAgY3JlYXRlQW5kQXBwZW5kRm9ybShTdG9yeU9iaiwgYXJ0aWNsZUlkKSB7XHJcbiAgICBsZXQgU3RvcnlOYW1lRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgU3RvcnlOYW1lRmllbGQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzZWxlY3RvclwiKVxyXG4gICAgbGV0IFN0b3J5U3RvcnlzRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgU3RvcnlTdG9yeXNGaWVsZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNlbGVjdG9yXCIpXHJcbiAgICBsZXQgU3RvcnlQaWN0dXJlc0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgIFN0b3J5UGljdHVyZXNGaWVsZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNlbGVjdG9yXCIpXHJcbiAgICBsZXQgU3RvcnlOYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIFN0b3J5TmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCIgVGl0bGVcIlxyXG4gICAgbGV0IFN0b3J5TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICBTdG9yeU5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJDbGFzc1wiLCBcIklucHV0MVwiKVxyXG4gICAgU3RvcnlOYW1lSW5wdXQudmFsdWUgPSBTdG9yeU9iai50aXRsZVxyXG5cclxuICAgIFN0b3J5TmFtZUZpZWxkLmFwcGVuZENoaWxkKFN0b3J5TmFtZUlucHV0KVxyXG4gICAgU3RvcnlOYW1lRmllbGQuYXBwZW5kQ2hpbGQoU3RvcnlOYW1lTGFiZWwpXHJcblxyXG4gICAgbGV0IFN0b3J5UGljdHVyZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICBsZXQgU3RvcnlQaWN0dXJlTGFiZWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICBsZXQgU3RvcnlQaWN0dXJlTGFiZWwzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICBTdG9yeVBpY3R1cmVMYWJlbC50ZXh0Q29udGVudCA9IFwiIFBpY3R1cmVcIlxyXG4gICAgU3RvcnlQaWN0dXJlTGFiZWwyLnRleHRDb250ZW50ID0gXCIgUGljdHVyZSAyXCJcclxuICAgIFN0b3J5UGljdHVyZUxhYmVsMy50ZXh0Q29udGVudCA9IFwiIFBpY3R1cmUgM1wiXHJcbiAgICBsZXQgU3RvcnlQaWN0dXJlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIFN0b3J5UGljdHVyZUlucHV0LnNldEF0dHJpYnV0ZShcIkNsYXNzXCIsIFwiSW5wdXQ1XCIpXHJcbiAgICBsZXQgU3RvcnlQaWN0dXJlSW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICBTdG9yeVBpY3R1cmVJbnB1dDIuc2V0QXR0cmlidXRlKFwiQ2xhc3NcIiwgXCJJbnB1dDRcIilcclxuICAgIGxldCBTdG9yeVBpY3R1cmVJbnB1dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIFN0b3J5UGljdHVyZUlucHV0My5zZXRBdHRyaWJ1dGUoXCJDbGFzc1wiLCBcIklucHV0M1wiKVxyXG4gICAgU3RvcnlQaWN0dXJlSW5wdXQudmFsdWUgPSBTdG9yeU9iai5waWN0dXJlXHJcbiAgICBTdG9yeVBpY3R1cmVJbnB1dDIudmFsdWUgPSBTdG9yeU9iai5waWN0dXJlMlxyXG4gICAgU3RvcnlQaWN0dXJlSW5wdXQzLnZhbHVlID0gU3RvcnlPYmoucGljdHVyZTNcclxuXHJcbiAgICBTdG9yeVBpY3R1cmVzRmllbGQuYXBwZW5kQ2hpbGQoU3RvcnlQaWN0dXJlSW5wdXQpXHJcbiAgICBTdG9yeVBpY3R1cmVzRmllbGQuYXBwZW5kQ2hpbGQoU3RvcnlQaWN0dXJlTGFiZWwpXHJcblxyXG4gICAgU3RvcnlQaWN0dXJlc0ZpZWxkLmFwcGVuZENoaWxkKFN0b3J5UGljdHVyZUlucHV0MilcclxuICAgIFN0b3J5UGljdHVyZXNGaWVsZC5hcHBlbmRDaGlsZChTdG9yeVBpY3R1cmVMYWJlbDIpXHJcblxyXG4gICAgU3RvcnlQaWN0dXJlc0ZpZWxkLmFwcGVuZENoaWxkKFN0b3J5UGljdHVyZUlucHV0MylcclxuICAgIFN0b3J5UGljdHVyZXNGaWVsZC5hcHBlbmRDaGlsZChTdG9yeVBpY3R1cmVMYWJlbDMpXHJcblxyXG5cclxuXHJcblxyXG4gICAgbGV0IFN0b3J5U3RvcnlzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIFN0b3J5U3RvcnlzTGFiZWwudGV4dENvbnRlbnQgPSBcIlN0b3J5XCJcclxuICAgIGxldCBTdG9yeVN0b3J5c0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpXHJcbiAgICBTdG9yeVN0b3J5c0lucHV0LnNldEF0dHJpYnV0ZShcIkNsYXNzXCIsIFwiSW5wdXQyXCIpXHJcbiAgICBTdG9yeVN0b3J5c0lucHV0LnZhbHVlID0gU3RvcnlPYmouVGV4dFxyXG5cclxuICAgIFN0b3J5U3RvcnlzRmllbGQuYXBwZW5kQ2hpbGQoU3RvcnlTdG9yeXNJbnB1dClcclxuICAgIFN0b3J5U3RvcnlzRmllbGQuYXBwZW5kQ2hpbGQoU3RvcnlTdG9yeXNMYWJlbClcclxuXHJcblxyXG4gICAgbGV0IHVwZGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgIHVwZGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiVXBkYXRlXCJcclxuICAgIGxldCBTdG9yeUl0ZW1BcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5BcnRpMVwiKVxyXG4gICAgU3RvcnlJdGVtQXJ0aWNsZS5pbm5lckhUTUwgPSBcIiBcIlxyXG4gICAgU3RvcnlJdGVtQXJ0aWNsZS5hcHBlbmRDaGlsZChTdG9yeU5hbWVGaWVsZClcclxuICAgIFN0b3J5SXRlbUFydGljbGUuYXBwZW5kQ2hpbGQoU3RvcnlQaWN0dXJlc0ZpZWxkKVxyXG4gICAgU3RvcnlJdGVtQXJ0aWNsZS5hcHBlbmRDaGlsZChTdG9yeVN0b3J5c0ZpZWxkKVxyXG4gICAgU3RvcnlJdGVtQXJ0aWNsZS5hcHBlbmRDaGlsZCh1cGRhdGVCdXR0b24pXHJcbiAgICB1cGRhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc3QgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKTtcclxuICAgICAgY29uc3QgY3VycmVudFVzZXJJZCA9IEpTT04ucGFyc2UodXNlcklkKTtcclxuICAgICAgbGV0IGVkaXRlZFN0b3J5ID0ge1xyXG4gICAgICAgIHRpdGxlOiBTdG9yeU5hbWVJbnB1dC52YWx1ZSxcclxuICAgICAgICBwaWN0dXJlOiBTdG9yeVBpY3R1cmVJbnB1dC52YWx1ZSxcclxuICAgICAgICBwaWN0dXJlMjogU3RvcnlQaWN0dXJlSW5wdXQyLnZhbHVlLFxyXG4gICAgICAgIHBpY3R1cmUzOiBTdG9yeVBpY3R1cmVJbnB1dDMudmFsdWUsXHJcbiAgICAgICAgVGV4dDogU3RvcnlTdG9yeXNJbnB1dC52YWx1ZSxcclxuICAgICAgICB1c2VySWQ6IGN1cnJlbnRVc2VySWRcclxuICAgICAgfVxyXG4gICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuSW5wdXQxXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKG5hbWUudmFsdWUpXHJcbiAgICAgIC8vZm9ybSB2YWxpZGF0aW9uIHVzaW5nIGFuIGlmIGVsc2Ugc3RhdG1lbnRcclxuICAgICAgaWYgKG5hbWUudmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgYWxlcnQoXCJObyBTdG9yeSFcIilcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBTdG9yeUVkaXRGb3JtLmRvaXRub3coYXJ0aWNsZUlkLCBlZGl0ZWRTdG9yeSwgU3RvcnlPYmopXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuICBkb2l0bm93KGFydGljbGVJZCwgZWRpdGVkU3RvcnksIFN0b3J5T2JqKSB7XHJcbiAgICBTdG9yeUZvcm0uU3RvcnlGb3JtQnVpbGRlcigpXHJcbiAgICBBUEkucHV0RXhpc3RpbmdTdG9yeShhcnRpY2xlSWQsIGVkaXRlZFN0b3J5LCBTdG9yeU9iailcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlN0b3J5XCIpLmlubmVySFRNTCA9IFwiIFwiXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5TdG9yeTJcIikuaW5uZXJIVE1MID0gXCIgXCJcclxuICAgICAgICBTdG9yeWxpc3QyLmxpc3RTdG9yeTIoKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU3RvcnlFZGl0Rm9ybVxyXG4iLCJpbXBvcnQgQVBJIGZyb20gXCIuLi9hcGlcIlxyXG5pbXBvcnQgU3RvcnlsaXN0MiBmcm9tIFwiLi9TdG9yeUxpc3QvbGlzdGl0b3JhdG9yXCJcclxuXHJcbmNvbnN0IFN0b3J5Rm9ybVN0b3J5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbmNvbnN0IFN0b3J5Rm9ybVN0b3J5c0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG5jb25zdCBQaWN0dXJlc2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG5jb25zdCBQaWN0dXJlc2lucHV0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuY29uc3QgUGljdHVyZXNpbnB1dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcblxyXG5jb25zdCBTdG9yeUZvcm0gPSB7XHJcbiAgICBTdG9yeUZvcm1CdWlsZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IFN0b3J5QXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuU3Rvcnlmb3JtXCIpO1xyXG4gICAgICAgIGxldCBTdG9yeUZvcm1TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdG9yaWVzXCIpXHJcbiAgICAgICAgU3RvcnlBcnRpY2xlLmFwcGVuZChTdG9yeUZvcm1TZWN0aW9uKTtcclxuICAgICAgICBjb25zdCBTdG9yeUZvcm1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICAgICAgU3RvcnlGb3JtSGVhZGVyLnNldEF0dHJpYnV0ZShcIkNsYXNzXCIsIFwiU3RvcnlIZWFkZXJcIilcclxuICAgICAgICBTdG9yeUZvcm1TZWN0aW9uLmFwcGVuZENoaWxkKFN0b3J5Rm9ybUhlYWRlcik7XHJcbiAgICAgICAgU3RvcnlGb3JtSGVhZGVyLnRleHRDb250ZW50ID0gXCJBZGQgU3RvcnlcIjtcclxuICAgICAgICBTdG9yeUZvcm1TZWN0aW9uLmFwcGVuZENoaWxkKFN0b3J5Rm9ybVN0b3J5SW5wdXQpO1xyXG4gICAgICAgIFN0b3J5Rm9ybVN0b3J5SW5wdXQucGxhY2Vob2xkZXIgPSBcIlN0b3J5IE5hbWVcIjtcclxuICAgICAgICBTdG9yeUZvcm1TdG9yeUlucHV0LnNldEF0dHJpYnV0ZShcIkNsYXNzXCIsIFwiU3RvcnlpbnB1dFwiKVxyXG4gICAgICAgIFN0b3J5Rm9ybVNlY3Rpb24uYXBwZW5kQ2hpbGQoUGljdHVyZXNpbnB1dCk7XHJcbiAgICAgICAgUGljdHVyZXNpbnB1dC50ZXh0Q29udGVudCA9IFwiQWRkIFBpY3R1cmVcIjtcclxuICAgICAgICBQaWN0dXJlc2lucHV0LnBsYWNlaG9sZGVyID0gXCJQaWN0dXJlIFVSTFwiO1xyXG4gICAgICAgIFBpY3R1cmVzaW5wdXQuc2V0QXR0cmlidXRlKFwiQ2xhc3NcIiwgXCJQaWNpbnB1dDFcIilcclxuICAgICAgICBTdG9yeUZvcm1TZWN0aW9uLmFwcGVuZENoaWxkKFBpY3R1cmVzaW5wdXQyKTtcclxuICAgICAgICBQaWN0dXJlc2lucHV0Mi50ZXh0Q29udGVudCA9IFwiQWRkIFBpY3R1cmVcIjtcclxuICAgICAgICBQaWN0dXJlc2lucHV0Mi5wbGFjZWhvbGRlciA9IFwiUGljdHVyZSBVUkxcIjtcclxuICAgICAgICBQaWN0dXJlc2lucHV0Mi5zZXRBdHRyaWJ1dGUoXCJDbGFzc1wiLCBcIlBpY2lucHV0MlwiKVxyXG4gICAgICAgIFN0b3J5Rm9ybVNlY3Rpb24uYXBwZW5kQ2hpbGQoUGljdHVyZXNpbnB1dDMpO1xyXG4gICAgICAgIFBpY3R1cmVzaW5wdXQzLnRleHRDb250ZW50ID0gXCJBZGQgUGljdHVyZVwiO1xyXG4gICAgICAgIFBpY3R1cmVzaW5wdXQzLnBsYWNlaG9sZGVyID0gXCJQaWN0dXJlIFVSTFwiO1xyXG4gICAgICAgIFBpY3R1cmVzaW5wdXQzLnNldEF0dHJpYnV0ZShcIkNsYXNzXCIsIFwiUGljaW5wdXQzXCIpXHJcbiAgICAgICAgU3RvcnlGb3JtU2VjdGlvbi5hcHBlbmRDaGlsZChTdG9yeUZvcm1TdG9yeXNJbnB1dCk7XHJcbiAgICAgICAgU3RvcnlGb3JtU3RvcnlzSW5wdXQucGxhY2Vob2xkZXIgPSBcIlN0b3J5XCI7XHJcbiAgICAgICAgbGV0IGJyZWFrMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKVxyXG4gICAgICAgIFN0b3J5Rm9ybVNlY3Rpb24uYXBwZW5kQ2hpbGQoYnJlYWsxKVxyXG4gICAgICAgIFN0b3J5Rm9ybVN0b3J5c0lucHV0LnNldEF0dHJpYnV0ZShcIkNsYXNzXCIsIFwiU3Rvcnl0ZXh0XCIpXHJcbiAgICAgICAgY29uc3QgYWRkU3RvcnlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGFkZFN0b3J5QnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2VsY3RvcmJ1dHRvbjFcIilcclxuICAgICAgICBTdG9yeUZvcm1TZWN0aW9uLmFwcGVuZENoaWxkKGFkZFN0b3J5QnV0dG9uKTtcclxuICAgICAgICBhZGRTdG9yeUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIFN0b3J5XCI7XHJcbiAgICAgICAgYWRkU3RvcnlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy9ydWRlbWVudHJ5IGZvcm0gdmFsaWRhdGlvblxyXG4gICAgICAgICAgICBsZXQgbmFtZWlwbnV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5TdG9yeWlucHV0XCIpXHJcbiAgICAgICAgICAgIGlmIChuYW1laXBudXQudmFsdWUubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiTm8gU3RvcnkhXCIpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAobmFtZWlwbnV0LnZhbHVlLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICBTdG9yeUZvcm0uYWRkU3RvcnlUb0pTT04oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBhZGRTdG9yeVRvSlNPTigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkJ1dHRvbiBXb3Jrc1wiKTtcclxuICAgICAgICBjb25zdCBTdG9yeVRpdGxlID0gU3RvcnlGb3JtU3RvcnlJbnB1dC52YWx1ZTtcclxuICAgICAgICBjb25zdCBTdG9yeVN0b3J5cyA9IFN0b3J5Rm9ybVN0b3J5c0lucHV0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IFBpY3R1cmVzMiA9IFBpY3R1cmVzaW5wdXQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgUGljdHVyZXMzID0gUGljdHVyZXNpbnB1dDIudmFsdWU7XHJcbiAgICAgICAgY29uc3QgUGljdHVyZXMgPSBQaWN0dXJlc2lucHV0My52YWx1ZTtcclxuICAgICAgICBjb25zdCBjdXJyZW50VXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKTtcclxuICAgICAgICBjb25zdCB1c2VySWQgPSBKU09OLnBhcnNlKGN1cnJlbnRVc2VySWQpO1xyXG5cclxuICAgICAgICBsZXQgbmV3U3RvcnkgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBTdG9yeVRpdGxlLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiBQaWN0dXJlcyxcclxuICAgICAgICAgICAgcGljdHVyZTI6IFBpY3R1cmVzMixcclxuICAgICAgICAgICAgcGljdHVyZTM6IFBpY3R1cmVzMyxcclxuICAgICAgICAgICAgVGV4dDogU3RvcnlTdG9yeXMsXHJcbiAgICAgICAgICAgIHVzZXJJZDogdXNlcklkXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdTdG9yeSk7XHJcbiAgICAgICAgQVBJLnBvc3ROZXdEYXRhKFwiU3Rvcmllc1wiLCBuZXdTdG9yeSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5TdG9yeVwiKS5pbm5lckhUTUwgPSBcIiBcIlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5TdG9yeTJcIikuaW5uZXJIVE1MID0gXCIgXCJcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgLy9jbGVhcmVpbmcgYW5kIHJlZW50ZXJpbmcgcGxhY2Vob2xkZXIgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlN0b3J5aW5wdXRcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5TdG9yeWlucHV0XCIpLnBsYWNlaG9sZGVyID0gXCJTdG9yeSBOYW1lXCI7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlN0b3J5dGV4dFwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlN0b3J5dGV4dFwiKS5wbGFjZWhvbGRlciA9IFwiU3RvcnlcIjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuUGljaW5wdXQxXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuUGljaW5wdXQxXCIpLnBsYWNlaG9sZGVyID0gXCJQaWN0dXJlIFVSTFwiO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5QaWNpbnB1dDJcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5QaWNpbnB1dDJcIikucGxhY2Vob2xkZXIgPSBcIlBpY3R1cmUgVVJMXCI7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlBpY2lucHV0M1wiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlBpY2lucHV0M1wiKS5wbGFjZWhvbGRlciA9IFwiUGljdHVyZSBVUkxcIjtcclxuICAgICAgICAgICAgICAgIFN0b3J5bGlzdDIubGlzdFN0b3J5MigpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yeUZvcm0iLCJpbXBvcnQgU3RvcmllcyBmcm9tIFwiLi4vU3RvcnlCdWlsZGVyXCJcclxuY29uc3QgU3RvcnlzTGlzdDMgPSB7XHJcbiAgICBTdG9yeUxpc3RCdWlsZGVyNShTdG9yeU9iaikge1xyXG4gICAgICAgIGNvbnN0IFN0b3J5QXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuU3RvcnkyXCIpXHJcbiAgICAgICAgY29uc3QgU3RvcnlOYW1lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICBTdG9yeU5hbWUyLnNldEF0dHJpYnV0ZShcImlkXCIsIGBUaXRsZS0tJHtTdG9yeU9iai5pZH1gKVxyXG4gICAgICAgIFN0b3J5TmFtZTIuc2V0QXR0cmlidXRlKFwiQ2xhc3NcIiwgXCJUaXRsZTBcIilcclxuICAgICAgICBjb25zdCBTdG9yeU91dHB1dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcclxuICAgICAgICBTdG9yeU91dHB1dFNlY3Rpb24uYXBwZW5kQ2hpbGQoU3RvcnlOYW1lMik7XHJcbiAgICAgICAgU3RvcnlBcnRpY2xlLmFwcGVuZENoaWxkKFN0b3J5T3V0cHV0U2VjdGlvbik7XHJcbiAgICAgICAgU3RvcnlOYW1lMi50ZXh0Q29udGVudCA9IFN0b3J5T2JqLnRpdGxlO1xyXG4gICAgICAgIFN0b3J5TmFtZTIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IFN0b3JpZXNjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0b3JpZXNcIilcclxuICAgICAgICAgICAgU3Rvcmllc2NvbnRhaW5lci5pbm5lckhUTUwgPSBcIiBcIlxyXG4gICAgICAgICAgICBsZXQgY2xlYXJjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5TdG9yeVwiKVxyXG4gICAgICAgICAgICBjbGVhcmNvbnRlbnQuaW5uZXJIVE1MID0gXCIgXCJcclxuICAgICAgICAgICAgU3Rvcmllcy5TdG9yeUJ1aWxkZXIoU3RvcnlPYmopO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3J5c0xpc3QzXHJcblxyXG4iLCJpbXBvcnQgQVBJIGZyb20gXCIuLi8uLi9hcGlcIlxyXG5pbXBvcnQgU3RvcnlzTGlzdDMgZnJvbSBcIi4vbGlzdGJ1aWxkZXJcIlxyXG5jb25zdCBTdG9yeWxpc3QyID0ge1xyXG4gICAgbGlzdFN0b3J5MigpIHtcclxuICAgICAgICBBUEkuZ2V0RGF0YShcIlN0b3JpZXNcIilcclxuICAgICAgICAgICAgLnRoZW4oYWxsU3RvcmllcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGxTdG9yaWVzLmZvckVhY2goU3RvcnlPYmogPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFVzZXJJZCA9IEpTT04ucGFyc2UodXNlcklkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoU3RvcnlPYmoudXNlcklkID09PSBjdXJyZW50VXNlcklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0b3J5c0xpc3QzLlN0b3J5TGlzdEJ1aWxkZXI1KFN0b3J5T2JqKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTdG9yeWxpc3QyIiwiaW1wb3J0IFN0b3J5bGlzdDQgZnJvbSBcIi4vc2VhcmNobGlzdHJlc3VsdHNcIlxyXG5pbXBvcnQgQVBJIGZyb20gXCIuLi8uLi9hcGlcIlxyXG5jb25zdCBzZXJjaGJhciA9IHtcclxuICBzZWFyY2hiYXIyKCkge1xyXG4gICAgbGV0IHN0b3J5Y29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5TdG9yeTNcIilcclxuICAgIGNvbnN0IHNlYXJjaGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklucHV0XCIpXHJcbiAgICBzZWFyY2hpbnB1dC50ZXh0Q29udGVudCA9IFwiQWRkIFNlYXJjaFwiO1xyXG4gICAgc2VhcmNoaW5wdXQuc2V0QXR0cmlidXRlKFwiSWRcIiwgXCJTZWFyY2hiYXJcIilcclxuICAgIHNlYXJjaGlucHV0LnBsYWNlaG9sZGVyID0gXCJTZWFyY2hcIjtcclxuICAgIGxldCBzZWFyY2hidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICBsZXQgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIilcclxuICAgIHNlYXJjaGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJDbGFzc1wiLCBcIlNlYXJjaEJ1dHRvblwiKVxyXG4gICAgc2VhcmNoYnV0dG9uLnRleHRDb250ZW50ID0gXCJTZWFyY2hcIlxyXG4gICAgc3Rvcnljb250YWluZXIuYXBwZW5kKHNlYXJjaGlucHV0KVxyXG4gICAgc3Rvcnljb250YWluZXIuYXBwZW5kKGJyKVxyXG4gICAgc3Rvcnljb250YWluZXIuYXBwZW5kKHNlYXJjaGJ1dHRvbilcclxuICAgIHNlYXJjaGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlN0b3J5MlwiKS5pbm5lckhUTUwgPSBcIiBcIlxyXG4gICAgICBsZXQgc2VhcmNoYmFycXVlZXJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJTZWFyY2hiYXJcIikudmFsdWVcclxuICAgICAgQVBJLmdldERhdGEyKHNlYXJjaGJhcnF1ZWVyeSlcclxuICAgICAgLy9hIGZvcm0gb2YgdmFsaWRhdGlvbiBmb3IgdGhlIGZldGNoIGNhbGwgc28gaXQgV2lsbCBub3QgIGJyZWFrXHJcbiAgICAgIGlmIChzZWFyY2hiYXJxdWVlcnkgIT0gXCIgXCIpIHtcclxuICAgICAgICBzZWFyY2hiYXJxdWVlcnkgPSBcIiBcIjtcclxuICAgICAgICBTdG9yeWxpc3Q0Lmxpc3RTdG9yeTQoKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBzZXJjaGJhciIsImltcG9ydCBBUEkgZnJvbSBcIi4uLy4uL2FwaVwiXHJcbmltcG9ydCBTdG9yeXNMaXN0NSBmcm9tIFwiLi9saXN0YnVpbGRlclwiXHJcbmNvbnN0IFN0b3J5bGlzdDQgPSB7XHJcbiAgICBsaXN0U3Rvcnk0KCkge1xyXG4gICAgICAgIGxldCBTZWFyY2hJbnB1dFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJTZWFyY2hiYXJcIikudmFsdWVcclxuICAgICAgICBBUEkuZ2V0RGF0YTIoU2VhcmNoSW5wdXRWYWx1ZSlcclxuICAgICAgICAgICAgLnRoZW4oYWxsU3RvcmllcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGxTdG9yaWVzLmZvckVhY2goU3RvcnkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFVzZXJJZCA9IEpTT04ucGFyc2UodXNlcklkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoU3RvcnkudXNlcklkID09PSBjdXJyZW50VXNlcklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0b3J5c0xpc3Q1LlN0b3J5TGlzdEJ1aWxkZXI1KFN0b3J5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTdG9yeWxpc3Q0IiwiY29uc3QgQVBJID0ge1xyXG5cclxuICAgIGdldERhdGEocmVzb3VyY2UpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9waXBzb2NpYWwuaGVyb2t1YXBwLmNvbS9hcGkvZGF0YWJhc2UuanNvbiR7cmVzb3VyY2V9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgfSxcclxuICAgIGdldERhdGEzKHJlc291cmNlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vcGlwc29jaWFsLmhlcm9rdWFwcC5jb20vYXBpL2RhdGFiYXNlLmpzb25TdG9yaWVzLyR7cmVzb3VyY2V9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgfSxcclxuICAgIGdldERhdGEyKHJlc291cmNlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vcGlwc29jaWFsLmhlcm9rdWFwcC5jb20vYXBpL2RhdGFiYXNlLmpzb25TdG9yaWVzP3RpdGxlX2xpa2U9JHtyZXNvdXJjZX1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICB9LFxyXG4gICAgZ2V0UGF5bG9hZERhdGEocmVzb3VyY2UsIHBheWxvYWQpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9waXBzb2NpYWwuaGVyb2t1YXBwLmNvbS9hcGkvZGF0YWJhc2UuanNvbiR7cmVzb3VyY2V9LyR7cGF5bG9hZH1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICB9LFxyXG4gICAgcG9zdE5ld0RhdGEocmVzb3VyY2UsIHBheWxvYWQpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9waXBzb2NpYWwuaGVyb2t1YXBwLmNvbS9hcGkvZGF0YWJhc2UuanNvbiR7cmVzb3VyY2V9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHB1dCAgZmV0Y2ggY2FsbCBwYXNzaW5nIGluIHRoZSBwYXJhbWF0ZXJzIFN0b3J5IGlkIGFuZCBzdG9yeSB0byBlZGl0IHdpY2ggYXJlIHZhcmlhYmxlcyBpbSBjb252ZXJ0aW5nIHRoZSBvYmplY3QgU3RvcnkgdG8gZWRpdCBpbnRvIGEgcmVhdmJsZSBqc29uIHN0cmluZ1xyXG4gICAgcHV0RXhpc3RpbmdTdG9yeShTdG9yeWlkLCBTdG9yeVRvRWRpdCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL3BpcHNvY2lhbC5oZXJva3VhcHAuY29tL2FwaS9kYXRhYmFzZS5qc29uU3Rvcmllcy8ke1N0b3J5aWR9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KFN0b3J5VG9FZGl0KVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgZGVsZXRlRGF0YShyZXNvdXJjZSkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL3BpcHNvY2lhbC5oZXJva3VhcHAuY29tL2FwaS9kYXRhYmFzZS5qc29uU3Rvcmllcy8ke3Jlc291cmNlfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBBUEkiLCJsZXQgTUQ1ID0gZnVuY3Rpb24gKHN0cmluZykge1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBSb3RhdGVMZWZ0KGxWYWx1ZSwgaVNoaWZ0Qml0cykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChsVmFsdWUgPDwgaVNoaWZ0Qml0cykgfCAobFZhbHVlID4+PiAoMzIgLSBpU2hpZnRCaXRzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIEFkZFVuc2lnbmVkKGxYLCBsWSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxYNCwgbFk0LCBsWDgsIGxZOCwgbFJlc3VsdDtcclxuICAgICAgICAgICAgICAgIGxYOCA9IChsWCAmIDB4ODAwMDAwMDApO1xyXG4gICAgICAgICAgICAgICAgbFk4ID0gKGxZICYgMHg4MDAwMDAwMCk7XHJcbiAgICAgICAgICAgICAgICBsWDQgPSAobFggJiAweDQwMDAwMDAwKTtcclxuICAgICAgICAgICAgICAgIGxZNCA9IChsWSAmIDB4NDAwMDAwMDApO1xyXG4gICAgICAgICAgICAgICAgbFJlc3VsdCA9IChsWCAmIDB4M0ZGRkZGRkYpICsgKGxZICYgMHgzRkZGRkZGRik7XHJcbiAgICAgICAgICAgICAgICBpZiAobFg0ICYgbFk0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAobFJlc3VsdCBeIDB4ODAwMDAwMDAgXiBsWDggXiBsWTgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGxYNCB8IGxZNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobFJlc3VsdCAmIDB4NDAwMDAwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGxSZXN1bHQgXiAweEMwMDAwMDAwIF4gbFg4IF4gbFk4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGxSZXN1bHQgXiAweDQwMDAwMDAwIF4gbFg4IF4gbFk4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChsUmVzdWx0IF4gbFg4IF4gbFk4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gRih4LCB5LCB6KSB7IHJldHVybiAoeCAmIHkpIHwgKCh+eCkgJiB6KTsgfVxyXG4gICAgICAgIGZ1bmN0aW9uIEcoeCwgeSwgeikgeyByZXR1cm4gKHggJiB6KSB8ICh5ICYgKH56KSk7IH1cclxuICAgICAgICBmdW5jdGlvbiBIKHgsIHksIHopIHsgcmV0dXJuICh4IF4geSBeIHopOyB9XHJcbiAgICAgICAgZnVuY3Rpb24gSSh4LCB5LCB6KSB7IHJldHVybiAoeSBeICh4IHwgKH56KSkpOyB9XHJcbiAgICAgICAgZnVuY3Rpb24gRkYoYSwgYiwgYywgZCwgeCwgcywgYWMpIHtcclxuICAgICAgICAgICAgICAgIGEgPSBBZGRVbnNpZ25lZChhLCBBZGRVbnNpZ25lZChBZGRVbnNpZ25lZChGKGIsIGMsIGQpLCB4KSwgYWMpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBBZGRVbnNpZ25lZChSb3RhdGVMZWZ0KGEsIHMpLCBiKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZ1bmN0aW9uIEdHKGEsIGIsIGMsIGQsIHgsIHMsIGFjKSB7XHJcbiAgICAgICAgICAgICAgICBhID0gQWRkVW5zaWduZWQoYSwgQWRkVW5zaWduZWQoQWRkVW5zaWduZWQoRyhiLCBjLCBkKSwgeCksIGFjKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQWRkVW5zaWduZWQoUm90YXRlTGVmdChhLCBzKSwgYik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gSEgoYSwgYiwgYywgZCwgeCwgcywgYWMpIHtcclxuICAgICAgICAgICAgICAgIGEgPSBBZGRVbnNpZ25lZChhLCBBZGRVbnNpZ25lZChBZGRVbnNpZ25lZChIKGIsIGMsIGQpLCB4KSwgYWMpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBBZGRVbnNpZ25lZChSb3RhdGVMZWZ0KGEsIHMpLCBiKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBJSShhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xyXG4gICAgICAgICAgICAgICAgYSA9IEFkZFVuc2lnbmVkKGEsIEFkZFVuc2lnbmVkKEFkZFVuc2lnbmVkKEkoYiwgYywgZCksIHgpLCBhYykpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEFkZFVuc2lnbmVkKFJvdGF0ZUxlZnQoYSwgcyksIGIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIENvbnZlcnRUb1dvcmRBcnJheShzdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgIHZhciBsV29yZENvdW50O1xyXG4gICAgICAgICAgICAgICAgdmFyIGxNZXNzYWdlTGVuZ3RoID0gc3RyaW5nLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHZhciBsTnVtYmVyT2ZXb3Jkc190ZW1wMSA9IGxNZXNzYWdlTGVuZ3RoICsgODtcclxuICAgICAgICAgICAgICAgIHZhciBsTnVtYmVyT2ZXb3Jkc190ZW1wMiA9IChsTnVtYmVyT2ZXb3Jkc190ZW1wMSAtIChsTnVtYmVyT2ZXb3Jkc190ZW1wMSAlIDY0KSkgLyA2NDtcclxuICAgICAgICAgICAgICAgIHZhciBsTnVtYmVyT2ZXb3JkcyA9IChsTnVtYmVyT2ZXb3Jkc190ZW1wMiArIDEpICogMTY7XHJcbiAgICAgICAgICAgICAgICB2YXIgbFdvcmRBcnJheSA9IEFycmF5KGxOdW1iZXJPZldvcmRzIC0gMSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbEJ5dGVQb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICB2YXIgbEJ5dGVDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobEJ5dGVDb3VudCA8IGxNZXNzYWdlTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxXb3JkQ291bnQgPSAobEJ5dGVDb3VudCAtIChsQnl0ZUNvdW50ICUgNCkpIC8gNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbEJ5dGVQb3NpdGlvbiA9IChsQnl0ZUNvdW50ICUgNCkgKiA4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsV29yZEFycmF5W2xXb3JkQ291bnRdID0gKGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gfCAoc3RyaW5nLmNoYXJDb2RlQXQobEJ5dGVDb3VudCkgPDwgbEJ5dGVQb3NpdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsQnl0ZUNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsV29yZENvdW50ID0gKGxCeXRlQ291bnQgLSAobEJ5dGVDb3VudCAlIDQpKSAvIDQ7XHJcbiAgICAgICAgICAgICAgICBsQnl0ZVBvc2l0aW9uID0gKGxCeXRlQ291bnQgJSA0KSAqIDg7XHJcbiAgICAgICAgICAgICAgICBsV29yZEFycmF5W2xXb3JkQ291bnRdID0gbFdvcmRBcnJheVtsV29yZENvdW50XSB8ICgweDgwIDw8IGxCeXRlUG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgbFdvcmRBcnJheVtsTnVtYmVyT2ZXb3JkcyAtIDJdID0gbE1lc3NhZ2VMZW5ndGggPDwgMztcclxuICAgICAgICAgICAgICAgIGxXb3JkQXJyYXlbbE51bWJlck9mV29yZHMgLSAxXSA9IGxNZXNzYWdlTGVuZ3RoID4+PiAyOTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsV29yZEFycmF5O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIFdvcmRUb0hleChsVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBXb3JkVG9IZXhWYWx1ZSA9IFwiXCIsIFdvcmRUb0hleFZhbHVlX3RlbXAgPSBcIlwiLCBsQnl0ZSwgbENvdW50O1xyXG4gICAgICAgICAgICAgICAgZm9yIChsQ291bnQgPSAwOyBsQ291bnQgPD0gMzsgbENvdW50KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbEJ5dGUgPSAobFZhbHVlID4+PiAobENvdW50ICogOCkpICYgMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBXb3JkVG9IZXhWYWx1ZV90ZW1wID0gXCIwXCIgKyBsQnl0ZS50b1N0cmluZygxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdvcmRUb0hleFZhbHVlID0gV29yZFRvSGV4VmFsdWUgKyBXb3JkVG9IZXhWYWx1ZV90ZW1wLnN1YnN0cihXb3JkVG9IZXhWYWx1ZV90ZW1wLmxlbmd0aCAtIDIsIDIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFdvcmRUb0hleFZhbHVlO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIFV0ZjhFbmNvZGUoc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvXFxyXFxuL2csIFwiXFxuXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHV0ZnRleHQgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgc3RyaW5nLmxlbmd0aDsgbisrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IHN0cmluZy5jaGFyQ29kZUF0KG4pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMgPCAxMjgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKGMgPiAxMjcpICYmIChjIDwgMjA0OCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgPj4gNikgfCAxOTIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDYzKSB8IDEyOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjID4+IDEyKSB8IDIyNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyA+PiA2KSAmIDYzKSB8IDEyOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjICYgNjMpIHwgMTI4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXRmdGV4dDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgeCA9IEFycmF5KCk7XHJcbiAgICAgICAgdmFyIGssIEFBLCBCQiwgQ0MsIERELCBhLCBiLCBjLCBkO1xyXG4gICAgICAgIHZhciBTMTEgPSA3LCBTMTIgPSAxMiwgUzEzID0gMTcsIFMxNCA9IDIyO1xyXG4gICAgICAgIHZhciBTMjEgPSA1LCBTMjIgPSA5LCBTMjMgPSAxNCwgUzI0ID0gMjA7XHJcbiAgICAgICAgdmFyIFMzMSA9IDQsIFMzMiA9IDExLCBTMzMgPSAxNiwgUzM0ID0gMjM7XHJcbiAgICAgICAgdmFyIFM0MSA9IDYsIFM0MiA9IDEwLCBTNDMgPSAxNSwgUzQ0ID0gMjE7XHJcblxyXG4gICAgICAgIHN0cmluZyA9IFV0ZjhFbmNvZGUoc3RyaW5nKTtcclxuXHJcbiAgICAgICAgeCA9IENvbnZlcnRUb1dvcmRBcnJheShzdHJpbmcpO1xyXG5cclxuICAgICAgICBhID0gMHg2NzQ1MjMwMTsgYiA9IDB4RUZDREFCODk7IGMgPSAweDk4QkFEQ0ZFOyBkID0gMHgxMDMyNTQ3NjtcclxuXHJcbiAgICAgICAgZm9yIChrID0gMDsgayA8IHgubGVuZ3RoOyBrICs9IDE2KSB7XHJcbiAgICAgICAgICAgICAgICBBQSA9IGE7IEJCID0gYjsgQ0MgPSBjOyBERCA9IGQ7XHJcbiAgICAgICAgICAgICAgICBhID0gRkYoYSwgYiwgYywgZCwgeFtrICsgMF0sIFMxMSwgMHhENzZBQTQ3OCk7XHJcbiAgICAgICAgICAgICAgICBkID0gRkYoZCwgYSwgYiwgYywgeFtrICsgMV0sIFMxMiwgMHhFOEM3Qjc1Nik7XHJcbiAgICAgICAgICAgICAgICBjID0gRkYoYywgZCwgYSwgYiwgeFtrICsgMl0sIFMxMywgMHgyNDIwNzBEQik7XHJcbiAgICAgICAgICAgICAgICBiID0gRkYoYiwgYywgZCwgYSwgeFtrICsgM10sIFMxNCwgMHhDMUJEQ0VFRSk7XHJcbiAgICAgICAgICAgICAgICBhID0gRkYoYSwgYiwgYywgZCwgeFtrICsgNF0sIFMxMSwgMHhGNTdDMEZBRik7XHJcbiAgICAgICAgICAgICAgICBkID0gRkYoZCwgYSwgYiwgYywgeFtrICsgNV0sIFMxMiwgMHg0Nzg3QzYyQSk7XHJcbiAgICAgICAgICAgICAgICBjID0gRkYoYywgZCwgYSwgYiwgeFtrICsgNl0sIFMxMywgMHhBODMwNDYxMyk7XHJcbiAgICAgICAgICAgICAgICBiID0gRkYoYiwgYywgZCwgYSwgeFtrICsgN10sIFMxNCwgMHhGRDQ2OTUwMSk7XHJcbiAgICAgICAgICAgICAgICBhID0gRkYoYSwgYiwgYywgZCwgeFtrICsgOF0sIFMxMSwgMHg2OTgwOThEOCk7XHJcbiAgICAgICAgICAgICAgICBkID0gRkYoZCwgYSwgYiwgYywgeFtrICsgOV0sIFMxMiwgMHg4QjQ0RjdBRik7XHJcbiAgICAgICAgICAgICAgICBjID0gRkYoYywgZCwgYSwgYiwgeFtrICsgMTBdLCBTMTMsIDB4RkZGRjVCQjEpO1xyXG4gICAgICAgICAgICAgICAgYiA9IEZGKGIsIGMsIGQsIGEsIHhbayArIDExXSwgUzE0LCAweDg5NUNEN0JFKTtcclxuICAgICAgICAgICAgICAgIGEgPSBGRihhLCBiLCBjLCBkLCB4W2sgKyAxMl0sIFMxMSwgMHg2QjkwMTEyMik7XHJcbiAgICAgICAgICAgICAgICBkID0gRkYoZCwgYSwgYiwgYywgeFtrICsgMTNdLCBTMTIsIDB4RkQ5ODcxOTMpO1xyXG4gICAgICAgICAgICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIHhbayArIDE0XSwgUzEzLCAweEE2Nzk0MzhFKTtcclxuICAgICAgICAgICAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCB4W2sgKyAxNV0sIFMxNCwgMHg0OUI0MDgyMSk7XHJcbiAgICAgICAgICAgICAgICBhID0gR0coYSwgYiwgYywgZCwgeFtrICsgMV0sIFMyMSwgMHhGNjFFMjU2Mik7XHJcbiAgICAgICAgICAgICAgICBkID0gR0coZCwgYSwgYiwgYywgeFtrICsgNl0sIFMyMiwgMHhDMDQwQjM0MCk7XHJcbiAgICAgICAgICAgICAgICBjID0gR0coYywgZCwgYSwgYiwgeFtrICsgMTFdLCBTMjMsIDB4MjY1RTVBNTEpO1xyXG4gICAgICAgICAgICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIHhbayArIDBdLCBTMjQsIDB4RTlCNkM3QUEpO1xyXG4gICAgICAgICAgICAgICAgYSA9IEdHKGEsIGIsIGMsIGQsIHhbayArIDVdLCBTMjEsIDB4RDYyRjEwNUQpO1xyXG4gICAgICAgICAgICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIHhbayArIDEwXSwgUzIyLCAweDI0NDE0NTMpO1xyXG4gICAgICAgICAgICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIHhbayArIDE1XSwgUzIzLCAweEQ4QTFFNjgxKTtcclxuICAgICAgICAgICAgICAgIGIgPSBHRyhiLCBjLCBkLCBhLCB4W2sgKyA0XSwgUzI0LCAweEU3RDNGQkM4KTtcclxuICAgICAgICAgICAgICAgIGEgPSBHRyhhLCBiLCBjLCBkLCB4W2sgKyA5XSwgUzIxLCAweDIxRTFDREU2KTtcclxuICAgICAgICAgICAgICAgIGQgPSBHRyhkLCBhLCBiLCBjLCB4W2sgKyAxNF0sIFMyMiwgMHhDMzM3MDdENik7XHJcbiAgICAgICAgICAgICAgICBjID0gR0coYywgZCwgYSwgYiwgeFtrICsgM10sIFMyMywgMHhGNEQ1MEQ4Nyk7XHJcbiAgICAgICAgICAgICAgICBiID0gR0coYiwgYywgZCwgYSwgeFtrICsgOF0sIFMyNCwgMHg0NTVBMTRFRCk7XHJcbiAgICAgICAgICAgICAgICBhID0gR0coYSwgYiwgYywgZCwgeFtrICsgMTNdLCBTMjEsIDB4QTlFM0U5MDUpO1xyXG4gICAgICAgICAgICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIHhbayArIDJdLCBTMjIsIDB4RkNFRkEzRjgpO1xyXG4gICAgICAgICAgICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIHhbayArIDddLCBTMjMsIDB4Njc2RjAyRDkpO1xyXG4gICAgICAgICAgICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIHhbayArIDEyXSwgUzI0LCAweDhEMkE0QzhBKTtcclxuICAgICAgICAgICAgICAgIGEgPSBISChhLCBiLCBjLCBkLCB4W2sgKyA1XSwgUzMxLCAweEZGRkEzOTQyKTtcclxuICAgICAgICAgICAgICAgIGQgPSBISChkLCBhLCBiLCBjLCB4W2sgKyA4XSwgUzMyLCAweDg3NzFGNjgxKTtcclxuICAgICAgICAgICAgICAgIGMgPSBISChjLCBkLCBhLCBiLCB4W2sgKyAxMV0sIFMzMywgMHg2RDlENjEyMik7XHJcbiAgICAgICAgICAgICAgICBiID0gSEgoYiwgYywgZCwgYSwgeFtrICsgMTRdLCBTMzQsIDB4RkRFNTM4MEMpO1xyXG4gICAgICAgICAgICAgICAgYSA9IEhIKGEsIGIsIGMsIGQsIHhbayArIDFdLCBTMzEsIDB4QTRCRUVBNDQpO1xyXG4gICAgICAgICAgICAgICAgZCA9IEhIKGQsIGEsIGIsIGMsIHhbayArIDRdLCBTMzIsIDB4NEJERUNGQTkpO1xyXG4gICAgICAgICAgICAgICAgYyA9IEhIKGMsIGQsIGEsIGIsIHhbayArIDddLCBTMzMsIDB4RjZCQjRCNjApO1xyXG4gICAgICAgICAgICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIHhbayArIDEwXSwgUzM0LCAweEJFQkZCQzcwKTtcclxuICAgICAgICAgICAgICAgIGEgPSBISChhLCBiLCBjLCBkLCB4W2sgKyAxM10sIFMzMSwgMHgyODlCN0VDNik7XHJcbiAgICAgICAgICAgICAgICBkID0gSEgoZCwgYSwgYiwgYywgeFtrICsgMF0sIFMzMiwgMHhFQUExMjdGQSk7XHJcbiAgICAgICAgICAgICAgICBjID0gSEgoYywgZCwgYSwgYiwgeFtrICsgM10sIFMzMywgMHhENEVGMzA4NSk7XHJcbiAgICAgICAgICAgICAgICBiID0gSEgoYiwgYywgZCwgYSwgeFtrICsgNl0sIFMzNCwgMHg0ODgxRDA1KTtcclxuICAgICAgICAgICAgICAgIGEgPSBISChhLCBiLCBjLCBkLCB4W2sgKyA5XSwgUzMxLCAweEQ5RDREMDM5KTtcclxuICAgICAgICAgICAgICAgIGQgPSBISChkLCBhLCBiLCBjLCB4W2sgKyAxMl0sIFMzMiwgMHhFNkRCOTlFNSk7XHJcbiAgICAgICAgICAgICAgICBjID0gSEgoYywgZCwgYSwgYiwgeFtrICsgMTVdLCBTMzMsIDB4MUZBMjdDRjgpO1xyXG4gICAgICAgICAgICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIHhbayArIDJdLCBTMzQsIDB4QzRBQzU2NjUpO1xyXG4gICAgICAgICAgICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIHhbayArIDBdLCBTNDEsIDB4RjQyOTIyNDQpO1xyXG4gICAgICAgICAgICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIHhbayArIDddLCBTNDIsIDB4NDMyQUZGOTcpO1xyXG4gICAgICAgICAgICAgICAgYyA9IElJKGMsIGQsIGEsIGIsIHhbayArIDE0XSwgUzQzLCAweEFCOTQyM0E3KTtcclxuICAgICAgICAgICAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCB4W2sgKyA1XSwgUzQ0LCAweEZDOTNBMDM5KTtcclxuICAgICAgICAgICAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCB4W2sgKyAxMl0sIFM0MSwgMHg2NTVCNTlDMyk7XHJcbiAgICAgICAgICAgICAgICBkID0gSUkoZCwgYSwgYiwgYywgeFtrICsgM10sIFM0MiwgMHg4RjBDQ0M5Mik7XHJcbiAgICAgICAgICAgICAgICBjID0gSUkoYywgZCwgYSwgYiwgeFtrICsgMTBdLCBTNDMsIDB4RkZFRkY0N0QpO1xyXG4gICAgICAgICAgICAgICAgYiA9IElJKGIsIGMsIGQsIGEsIHhbayArIDFdLCBTNDQsIDB4ODU4NDVERDEpO1xyXG4gICAgICAgICAgICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIHhbayArIDhdLCBTNDEsIDB4NkZBODdFNEYpO1xyXG4gICAgICAgICAgICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIHhbayArIDE1XSwgUzQyLCAweEZFMkNFNkUwKTtcclxuICAgICAgICAgICAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCB4W2sgKyA2XSwgUzQzLCAweEEzMDE0MzE0KTtcclxuICAgICAgICAgICAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCB4W2sgKyAxM10sIFM0NCwgMHg0RTA4MTFBMSk7XHJcbiAgICAgICAgICAgICAgICBhID0gSUkoYSwgYiwgYywgZCwgeFtrICsgNF0sIFM0MSwgMHhGNzUzN0U4Mik7XHJcbiAgICAgICAgICAgICAgICBkID0gSUkoZCwgYSwgYiwgYywgeFtrICsgMTFdLCBTNDIsIDB4QkQzQUYyMzUpO1xyXG4gICAgICAgICAgICAgICAgYyA9IElJKGMsIGQsIGEsIGIsIHhbayArIDJdLCBTNDMsIDB4MkFEN0QyQkIpO1xyXG4gICAgICAgICAgICAgICAgYiA9IElJKGIsIGMsIGQsIGEsIHhbayArIDldLCBTNDQsIDB4RUI4NkQzOTEpO1xyXG4gICAgICAgICAgICAgICAgYSA9IEFkZFVuc2lnbmVkKGEsIEFBKTtcclxuICAgICAgICAgICAgICAgIGIgPSBBZGRVbnNpZ25lZChiLCBCQik7XHJcbiAgICAgICAgICAgICAgICBjID0gQWRkVW5zaWduZWQoYywgQ0MpO1xyXG4gICAgICAgICAgICAgICAgZCA9IEFkZFVuc2lnbmVkKGQsIEREKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB0ZW1wID0gV29yZFRvSGV4KGEpICsgV29yZFRvSGV4KGIpICsgV29yZFRvSGV4KGMpICsgV29yZFRvSGV4KGQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGVtcC50b0xvd2VyQ2FzZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNRDUiLCJpbXBvcnQgQVBJIGZyb20gXCIuL2FwaVwiXHJcbmltcG9ydCB1c2VycGFnZSBmcm9tIFwiLi9zcGVjaWZpY3BhZ2VcIlxyXG5pbXBvcnQgTUQ1IGZyb20gXCIuL2hhc2hcIlxyXG5pbXBvcnQgcmVnaXN0cmF0aW9uRm9ybSBmcm9tIFwiLi9yZWdpc3RlclwiXHJcblxyXG5jb25zdCB1c2VyTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpOyAvLyBjcmVhdGVzIGFuIGlucHV0IGZpZWxkIGZvciB1c2VybmFtZVxyXG5jb25zdCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpOy8vIGNyZWF0ZXMgYW4gaW5wdXQgZmllbGQgZm9yIHBhc3N3b3JkXHJcbmNvbnN0IHJlZ2lzdHJhdGlvblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dF9fcmVnaXN0cmF0aW9uXCIpIC8vIGdyYWJzIGEgY2xhc3Mgb24gdGhlIGRvbVxyXG5jb25zdCBsb2dpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dF9fbG9naW5cIik7IC8vIGdyYWJzIGEgY2xhc3Mgb24gdGhlIGRvbVxyXG5yZWdpc3RyYXRpb25QYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgLy8gY2hhbmdlcyB0aGUgIGRpc3BsYXkgc3R5bGUgb2YgdGhlIGVsZW1lbnQgdG8gbm9uZVxyXG5cclxuY29uc3QgbG9naW4gPSB7XHJcbiAgICBjcmVhdGVBbmRBcHBlbmRMb2dpbklucHV0KCkge1xyXG4gICAgICAgIC8vIGNyZWF0ZXMgYW4gaDMgdGFnIHRvIHVzZSBhcyB0aGUgaGVhZGVyXHJcbiAgICAgICAgY29uc3QgTG9naW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcclxuICAgICAgICAvLyBhZGRzIHRleHQgdG8gdGhlIGgzIHRhZ1xyXG4gICAgICAgIExvZ2luSGVhZGVyLnRleHRDb250ZW50ID0gXCJXZWxjb21lIFRvIFAuSS5QXCJcclxuICAgICAgICAvLyBzZXQgdGhlIHR5cGUgb2YgdGhlIHVzZXJuYW1lIGlucHV0IGZpZWxkIHRvIHRleHRcclxuICAgICAgICB1c2VyTmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICAvLyBhZGRzIGEgcGxhY2UgaG9sZGVyIG9mIHRleHQgZm9yIHRoZSB1c2VyIHNvIHRoZXkgY2FuIHNlZSBhbiBleGFtcGxlIG9mIHdoYXQgdG8gdHlwZSBpblxyXG4gICAgICAgIHVzZXJOYW1lSW5wdXQucGxhY2Vob2xkZXIgPSBcInVzZXJuYW1lXCI7XHJcbiAgICAgICAgLy8gc2V0cyB0aGUgdHlwZSBvZiBpbnB1dCB0byBwYXNzd29yZCB0aHVzbHkgb2JmaXNjYXRpbmcgdGhlIHBhc3N3b3JkIGZyb20gdmlld1xyXG4gICAgICAgIHBhc3N3b3JkSW5wdXQudHlwZSA9IFwicGFzc3dvcmRcIjtcclxuICAgICAgICAvLyBhZGRzIGEgcGxhY2UgaG9sZGVyIG9mIHRleHQgZm9yIHRoZSB1c2VyIHNvIHRoZXkgY2FuIHNlZSBhbiBleGFtcGxlIG9mIHdoYXQgdG8gdHlwZSBpblxyXG4gICAgICAgIHBhc3N3b3JkSW5wdXQucGxhY2Vob2xkZXIgPSBcInBhc3N3b3JkXCI7XHJcbiAgICAgICAgLy8gYXBwZW5kcyBpdGVtIHRvIGxvZ2lucGFnZSB3aWNoIGlzIGEgY2xhc3Mgb24gdGhlIGRvbVxyXG4gICAgICAgIGxvZ2luUGFnZS5hcHBlbmRDaGlsZChMb2dpbkhlYWRlcilcclxuICAgICAgICAvLyBhcHBlbmRzIGl0ZW0gdG8gbG9naW5wYWdlIHdpY2ggaXMgYSBjbGFzcyBvbiB0aGUgZG9tXHJcbiAgICAgICAgbG9naW5QYWdlLmFwcGVuZENoaWxkKHVzZXJOYW1lSW5wdXQpO1xyXG4gICAgICAgIC8vIGFwcGVuZHMgaXRlbSB0byBsb2dpbnBhZ2Ugd2ljaCBpcyBhIGNsYXNzIG9uIHRoZSBkb21cclxuICAgICAgICBsb2dpblBhZ2UuYXBwZW5kQ2hpbGQocGFzc3dvcmRJbnB1dCk7XHJcbiAgICAgICAgLy9jcmVhdGVzIGEgYnV0dG9uIGZvciBsb2dpblxyXG4gICAgICAgIGNvbnN0IGxvZ2luQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAvLyBhZGRzIHRleHQgdG8gdGhlIGJ1dHRvbiBmb3IgbG9naW5cclxuICAgICAgICBsb2dpbkJ1dHRvbi50ZXh0Q29udGVudCA9IChcImxvZ2luXCIpO1xyXG4gICAgICAgIC8vY3JlYXRlcyBhIGJ1dHRvbiBmb3IgcmVnaXN0ZXJcclxuICAgICAgICBjb25zdCByZWdpc3RlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgLy8gYWRkcyB0ZXh0IHRvIHRoZSBidXR0b24gZm9yIHJlZ2lzdGVyXHJcbiAgICAgICAgcmVnaXN0ZXJCdXR0b24udGV4dENvbnRlbnQgPSAoXCJyZWdpc3RlclwiKTtcclxuICAgICAgICAvLyBhcHBlbmRzIGl0ZW0gdG8gbG9naW5wYWdlIHdpY2ggaXMgYSBjbGFzcyBvbiB0aGUgZG9tXHJcbiAgICAgICAgbG9naW5QYWdlLmFwcGVuZENoaWxkKGxvZ2luQnV0dG9uKTtcclxuICAgICAgICAvLyBhcHBlbmRzIGl0ZW0gdG8gbG9naW5wYWdlIHdpY2ggaXMgYSBjbGFzcyBvbiB0aGUgZG9tXHJcbiAgICAgICAgbG9naW5QYWdlLmFwcGVuZENoaWxkKHJlZ2lzdGVyQnV0dG9uKTtcclxuICAgICAgICAvLyAgZXZlbnQgbGlzdGluZXIgdGhhdCBkaXJlY3RseSBsZWFkcyB0byBhIGZ1bmN0aW9uXHJcbiAgICAgICAgbG9naW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuZ2V0VXNlckRhdGEpO1xyXG4gICAgICAgIC8vICBldmVudCBsaXN0aW5lciB0aGF0IGRpcmVjdGx5IGxlYWRzIHRvIGEgZnVuY3Rpb25cclxuICAgICAgICByZWdpc3RlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5yZXBsYWNlV2l0aFJlZ2lzdHJhdGlvbkZvcm0pO1xyXG4gICAgfSwgIC8vZnVuY3Rpb24gY2FsbGVkIG9uIGNsaWNrIGV2ZW50IGxvZ2luQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiXHJcbiAgICBnZXRVc2VyRGF0YSgpIHtcclxuICAgICAgICAvLyBzZXRzIGEgdmFyaWFibGUgdG8gdGhlIHZhbHVlIG9mIHRoZSB1c2VybmFtZSBpbnB1dCBmaWVsZFxyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gdXNlck5hbWVJbnB1dC52YWx1ZTtcclxuICAgICAgICAvLyBzZXRzIGEgdmFyaWFibGUgdG8gdGhlIHZhbHVlIG9mIHRoZSBwYXNzd29yZCBpbnB1dCBmaWVsZFxyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gcGFzc3dvcmRJbnB1dC52YWx1ZTtcclxuICAgICAgICAvLyBncmFicyBhbGwgdGhlIGRhdGEgYW5kIHBhc3NlcyBpbiB1c2VycyBhcyB0aGUgcGFyYW1hdGVyXHJcbiAgICAgICAgQVBJLmdldERhdGEoXCJ1c2Vyc1wiKVxyXG4gICAgICAgICAgICAvLyBvbmNlIGl0IGhhcyBhbCB0aGUgdXNlcnNcclxuICAgICAgICAgICAgLnRoZW4oYWxsVXNlcnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gc2V0IGEgdmFyaWFibGUgdG8gMVxyXG4gICAgICAgICAgICAgICAgbGV0IHVzZXJzUHJvY2Vzc2VkID0gMTtcclxuICAgICAgICAgICAgICAgIC8vIGZvciBlYWNoIHVzZXJcclxuICAgICAgICAgICAgICAgIGFsbFVzZXJzLmZvckVhY2godXNlciA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNldCBhIHZhcmlhYmxlIGVxdWFsIHRvIGEgaGFzaCBvZiB0aGUgIHVzZXIgbmFtZSAgYW5kICBwYXNzd29yZCBpbiBjb25qdWN0aW9uIHdpdGggdGhlIE1ENSBmdW5jdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXNzaGFzaCA9IE1ENShwYXNzd29yZCArIE1ENSh1c2VybmFtZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrcyBpZiB0aGUgdXNlcm5hbWUgYW5kIHBhc3N3b3JkIG1hdGNoIHdoYXQgaXMgaW4gdGhlIGRhdGFic2VcclxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlcm5hbWUgPT09IHVzZXIudXNlck5hbWUgJiYgcGFzc2hhc2ggPT09IHVzZXIucGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgaXQgaXMgaXQgc2V0cyB0aGUgdXNlciBpZCBvZiB0aGUgbWF0Y2hpbmcgdXNlciBpZCBpb250byBzZXNzaW9uIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCB1c2VyLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoZW4gc2V0cyB0aGUgdmFyIHVzZXJpZCB0byB0aGUgdXNlcmlkIGluIHNlc3Npb24gc3RvcmFnZSB3ZSBqdXN0IG1hZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhlbiBzZXRzIHNlc3Npb24gc3RvcmFnZSB1c2VyIG5hbWUgdG8gdGhlIHVzZXJuYW1lIGluIHRoZSBkYXRhYmFzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlck5hbWVcIiwgdXNlci51c2VyTmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGUgbG9hZHMgdGhlIHNwZWNpZmljIHVzZXIgcGFnZSBiYXNlZCBvbiB0aGUgdXNlciBpZCBwYXJhbWF0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZFVzZXJTcGVjaWZpY1BhZ2UodXNlcklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2tzIHRvIHNlZSBpZiB0aGUgdmFyaWFibGUgdXNlcmVzIHByb2NjZXNlZCB3aWNoIHN0YXJ0cyBhdCAxIGN1cmVudGwgZXF1YWxzIHRoZSBsZW50Z2ggb2YgdGhlIGFsbCB1c2VycyBpZiBpdCBkb2VzbnQgdGhlblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodXNlcnNQcm9jZXNzZWQgPT09IGFsbFVzZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIlVzZXJuYW1lL3Bhc3N3b3JkIGludmFsaWQuIElmIG5ldyB1c2VyLCBwbGVhc2UgcmVnaXN0ZXIuXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhc3N3b3JkKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0IHByb2NlZGVkcyB0byBpbmNyaW1lbnRlIHVudGlsIG9uZSBvZiB0aGUgYWJvdmUgMiBpZiBlbHNlIG9yIGlmIHN0YXRtZW50cyBhcmUgbWF0Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2Vyc1Byb2Nlc3NlZCsrXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBsb2FkVXNlclNwZWNpZmljUGFnZSgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9ydW5zIHRoZSB1c2VyIHNwZWNpZmljIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJwYWdlLnNwZWNpZmljdXNlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICB9LFxyXG4gICAgcmVwbGFjZVdpdGhSZWdpc3RyYXRpb25Gb3JtKCkge1xyXG4gICAgICAgIC8vZ3JhYnMgdGhlICBjbGFzcyBvbiB0aGUgZG9tXHJcbiAgICAgICAgY29uc3QgcmVnaXN0cmF0aW9uUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0X19yZWdpc3RyYXRpb25cIilcclxuICAgICAgICAvL3NldHMgdGhlIGVsZW1lbnQncyBpbm5lciBodG1sIHRvIGFuIGVtcHR5IHN0cmluZ1xyXG4gICAgICAgIHJlZ2lzdHJhdGlvblBhZ2UuaW5uZXJIVE1MID0gXCIgXCJcclxuICAgICAgICAvL3RoZW4gcnVucyB0aGUgY3JlYXRlIHJlZ2VzdHJhdGlvbiBmb3JtIGZ1bmN0aW9uXHJcbiAgICAgICAgcmVnaXN0cmF0aW9uRm9ybS5jcmVhdGVBbmRBcHBlbmRSZWdpc3RyYXRpb25Gb3JtKClcclxuICAgICAgICAvL3NldHMgdGhlIGRpc3BsYXkgc3R5bGUgb2YgdGhlIHJlZyBmb3JtIHRvIGJsb2NrXHJcbiAgICAgICAgcmVnaXN0cmF0aW9uUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIC8vZ3JhYnMgdGhlICBjbGFzcyBvbiB0aGUgZG9tXHJcbiAgICAgICAgY29uc3QgbG9naW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRfX2xvZ2luXCIpO1xyXG4gICAgICAgIC8vc2V0cyB0aGUgZGlzcGxheSBzdHlsZSBvZiB0aGUgbG9naW4gZm9ybSB0byBub25lXHJcbiAgICAgICAgbG9naW5QYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgICB9LFxyXG4gICAgcmVwbGFjZVdpdGhMb2dpbkZvcm0oKSB7XHJcbiAgICAgICAgLy9ncmFicyB0aGUgIGNsYXNzIG9uIHRoZSBkb21cclxuICAgICAgICBjb25zdCBsb2dpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dF9fbG9naW5cIik7XHJcbiAgICAgICAgLy8gc2V0cyB0aGUgaW5uZXIgaHRtbCBvZiB0aGUgZWxlbWVudCB0byBhbiBlbXB0eSBzdHJpbmdcclxuICAgICAgICBsb2dpblBhZ2UuaW5uZXJIVE1MID0gXCIgXCJcclxuICAgICAgICAvLyBjcmVhdGVzIHRoZSBsb2dpbiBmb3JtXHJcbiAgICAgICAgbG9naW4uY3JlYXRlQW5kQXBwZW5kTG9naW5JbnB1dCgpXHJcbiAgICAgICAgLy9ncmFicyB0aGUgIGNsYXNzIG9uIHRoZSBkb21cclxuICAgICAgICBjb25zdCByZWdpc3RyYXRpb25QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRfX3JlZ2lzdHJhdGlvblwiKVxyXG5cclxuICAgICAgICAvL3NldHMgdGhlIGRpc3BsYXkgc3R5bGUgb2YgdGhlIGxvZ2luIGZvcm0gdG8gQmxvY2tcclxuICAgICAgICBsb2dpblBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAvL3NldHMgdGhlIGRpc3BsYXkgc3R5bGUgb2YgdGhlIHJlZyBmb3JtIHRvIE5vbmVcclxuICAgICAgICByZWdpc3RyYXRpb25QYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAvL2dyYWJzIHRoZSAgY2xhc3Mgb24gdGhlIGRvbVxyXG4gICAgICAgIGNvbnN0IFN0b3J5NCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuU3Rvcnk0XCIpXHJcbiAgICAgICAgLy9ncmFicyB0aGUgIGNsYXNzIG9uIHRoZSBkb21cclxuICAgICAgICBjb25zdCBIZWFkZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXIyXCIpXHJcbiAgICAgICAgLy9ncmFicyB0aGUgIGNsYXNzIG9uIHRoZSBkb21cclxuICAgICAgICBjb25zdCBsb2dvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dF9fbG9nb3V0XCIpXHJcbiAgICAgICAgLy9ncmFicyB0aGUgIGNsYXNzIG9uIHRoZSBkb21cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0b3JpZXNcIikuaW5uZXJIVE1MID0gXCIgXCJcclxuICAgICAgICAvL3NldHMgdGhlIGRpc3BsYXkgc3R5bGUgb2YgdGhlIGVsZW1lbnQgIHRvIE5vbmVcclxuICAgICAgICBTdG9yeTQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIC8vc2V0cyB0aGUgZGlzcGxheSBzdHlsZSBvZiB0aGUgZWxlbWVudCAgdG8gTm9uZVxyXG4gICAgICAgIEhlYWRlcjIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIC8vc2V0cyB0aGUgZGlzcGxheSBzdHlsZSBvZiB0aGUgZWxlbWVudCAgdG8gTm9uZVxyXG4gICAgICAgIGxvZ291dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9LFxyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2dpbiIsIlxyXG5pbXBvcnQgbG9naW4gZnJvbSBcIi4vbG9naW5cIlxyXG5jb25zdCBsb2dvdXQgPSB7XHJcblxyXG4gIGNyZWF0ZUFuZEFwcGVuZExvZ291dCgpIHtcclxuXHJcbiAgICBjb25zdCBvdXRwdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRfX2xvZ291dFwiKTtcclxuXHJcbiAgICBsZXQgbG9nb3V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgbG9nb3V0QnV0dG9uLnRleHRDb250ZW50ID0gXCJMb2cgT3V0XCJcclxuICAgIGxvZ291dEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxvZ291dFwiKVxyXG5cclxuICAgIGxvZ291dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVMb2dvdXQpXHJcbiAgICBvdXRwdXRFbGVtZW50LmFwcGVuZENoaWxkKGxvZ291dEJ1dHRvbik7XHJcbiAgfSxcclxuXHJcbiAgaGFuZGxlTG9nb3V0KCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXIxMjNcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdG9yaWVzXCIpLmlubmVySFRNTCA9IFwiIFwiXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0b3JpZXNcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICAgIHNlc3Npb25TdG9yYWdlLmNsZWFyKCk7XHJcbiAgICBsb2dpbi5yZXBsYWNlV2l0aExvZ2luRm9ybSgpXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9nb3V0IiwiaW1wb3J0IGxvZ2luIGZyb20gXCIuL2xvZ2luXCJcclxuaW1wb3J0IHVzZXJwYWdlIGZyb20gXCIuL3NwZWNpZmljcGFnZVwiXHJcbmlmIChzZXNzaW9uU3RvcmFnZS51c2VySWQgPT09IHVuZGVmaW5lZCkge1xyXG4gIGxvZ2luLmNyZWF0ZUFuZEFwcGVuZExvZ2luSW5wdXQoKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcjEyM1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdG9yaWVzXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dF9fbG9nb3V0XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufVxyXG5pZiAoc2Vzc2lvblN0b3JhZ2UudXNlcklkID49IDEpIHtcclxuICB1c2VycGFnZS5zcGVjaWZpY3VzZXIoKVxyXG59XHJcbiIsImltcG9ydCBBUEkgZnJvbSBcIi4vYXBpXCJcclxuaW1wb3J0IGxvZ2luIGZyb20gXCIuL2xvZ2luXCJcclxuaW1wb3J0IE1ENSBmcm9tIFwiLi9oYXNoXCJcclxuY29uc3QgdXNlck5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG5jb25zdCB1c2VyUGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG5jb25zdCB1c2VyRW1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG5cclxuY29uc3QgY3JlYXRlTmV3VXNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuY29uc3QgYmFja2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuXHJcbmNvbnN0IHJlZ2lzdHJhdGlvbkZvcm0gPSB7XHJcblxyXG4gICAgY3JlYXRlQW5kQXBwZW5kUmVnaXN0cmF0aW9uRm9ybSgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dF9fcmVnaXN0cmF0aW9uXCIpXHJcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcclxuICAgICAgICByZWdpc3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChyZWdpc3RlckhlYWRlcilcclxuICAgICAgICByZWdpc3RlckhlYWRlci50ZXh0Q29udGVudCA9IFwiUmVnaXN0ZXIgVXNlclwiXHJcblxyXG5cclxuXHJcbiAgICAgICAgdXNlck5hbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCJcclxuICAgICAgICB1c2VyUGFzc3dvcmRJbnB1dC50eXBlID0gXCJwYXNzd29yZFwiXHJcbiAgICAgICAgdXNlckVtYWlsSW5wdXQudHlwZSA9IFwiZW1haWxcIlxyXG5cclxuXHJcbiAgICAgICAgdXNlck5hbWVJbnB1dC5wbGFjZWhvbGRlciA9IFwiSW5wdXQgVXNlck5hbWVcIlxyXG4gICAgICAgIHVzZXJQYXNzd29yZElucHV0LnBsYWNlaG9sZGVyID0gXCJDcmVhdGUgUGFzc3dvcmRcIlxyXG4gICAgICAgIHVzZXJFbWFpbElucHV0LnBsYWNlaG9sZGVyID0gXCJJbnB1dCBFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICBjcmVhdGVOZXdVc2VyLnRleHRDb250ZW50ID0gXCJSZWdpc3RlciBVc2VyXCJcclxuICAgICAgICBiYWNrYnV0dG9uLnRleHRDb250ZW50ID0gXCJCYWNrIFRvIExvZ2luXCJcclxuXHJcblxyXG4gICAgICAgIHJlZ2lzdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHVzZXJOYW1lSW5wdXQpXHJcbiAgICAgICAgcmVnaXN0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodXNlclBhc3N3b3JkSW5wdXQpXHJcbiAgICAgICAgcmVnaXN0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodXNlckVtYWlsSW5wdXQpXHJcbiAgICAgICAgcmVnaXN0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmV3VXNlcilcclxuICAgICAgICByZWdpc3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChiYWNrYnV0dG9uKVxyXG5cclxuICAgICAgICBjcmVhdGVOZXdVc2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmZvcm12YWxpZGF0aW9uKVxyXG4gICAgICAgIGJhY2tidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuR29CYWNrKVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgZm9ybXZhbGlkYXRpb24oKSB7XHJcbiAgICAgICAgaWYgKHVzZXJOYW1lSW5wdXQudmFsdWUubGVuZ3RoID09IDAgfHwgdXNlclBhc3N3b3JkSW5wdXQudmFsdWUubGVuZ3RoID09IDAgfHwgdXNlckVtYWlsSW5wdXQudmFsdWUubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJObyBTdG9yeSFcIilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAodXNlck5hbWVJbnB1dC52YWx1ZS5sZW5ndGggPiAwIHx8IHVzZXJQYXNzd29yZElucHV0LnZhbHVlLmxlbmd0aCA+IDAgfHwgdXNlckVtYWlsSW5wdXQudmFsdWUubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uRm9ybS5yZWdpc3RlclVzZXIoKVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZWdpc3RlclVzZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXJOYW1lVmFsdWUgPSB1c2VyTmFtZUlucHV0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHVzZXJQYXNzd29yZFZhbHVlID0gdXNlclBhc3N3b3JkSW5wdXQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdXNlckVtYWlsVmFsdWUgPSB1c2VyRW1haWxJbnB1dC52YWx1ZTtcclxuXHJcblxyXG4gICAgICAgIC8vb25jZSB0aGUgdmFsdWUgaXMgZ290ZW4gdGhpcyBmdW5jdGlvbiBoYXNoZXMgaXQgYmVmb3JlIGl0cyBzYXZlZCB0byB0aGUgREJcclxuICAgICAgICBsZXQgcGFzc2hhc2ggPSBNRDUodXNlclBhc3N3b3JkVmFsdWUgKyBNRDUodXNlck5hbWVWYWx1ZSkpO1xyXG5cclxuICAgICAgICBsZXQgbmV3VXNlclRvU2F2ZSA9IHtcclxuICAgICAgICAgICAgdXNlck5hbWU6IHVzZXJOYW1lVmFsdWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzaGFzaCxcclxuICAgICAgICAgICAgZW1haWw6IHVzZXJFbWFpbFZhbHVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBBUEkucG9zdE5ld0RhdGEoXCJ1c2Vyc1wiLCBuZXdVc2VyVG9TYXZlKVxyXG5cclxuICAgICAgICBsb2dpbi5yZXBsYWNlV2l0aExvZ2luRm9ybSgpO1xyXG4gICAgfSxcclxuICAgIEdvQmFjaygpIHtcclxuICAgICAgICBsb2dpbi5yZXBsYWNlV2l0aExvZ2luRm9ybSgpO1xyXG5cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCByZWdpc3RyYXRpb25Gb3JtXHJcbiIsImltcG9ydCBsb2dvdXQgZnJvbSBcIi4vbG9nb3V0XCJcclxuaW1wb3J0IFN0b3J5bGlzdDIgZnJvbSBcIi4vU3RvcnkvU3RvcnlMaXN0L2xpc3RpdG9yYXRvclwiXHJcbmltcG9ydCBTdG9yeUZvcm0gZnJvbSBcIi4vU3RvcnkvU3RvcnlGb3JtXCJcclxuaW1wb3J0IHNlcmNoYmFyIGZyb20gXCIuL1N0b3J5L1N0b3J5TGlzdC9zZWFyY2hiYXJcIlxyXG5sZXQgdXNlcnBhZ2UgPSB7XHJcbiAgIHNwZWNpZmljdXNlcigpe1xyXG5jb25zdCBTdG9yeTQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlN0b3J5NFwiKVxyXG5jb25zdCBTdG9yeTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlN0b3J5MlwiKVxyXG5jb25zdCBTdG9yeTMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlN0b3J5M1wiKVxyXG5jb25zdCBIZWFkZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXIyXCIpXHJcbmNvbnN0IGxvZ291dDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dF9fbG9nb3V0XCIpXHJcbmNvbnN0IGxvZ2luUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0X19sb2dpblwiKTtcclxubG9naW5QYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdG9yaWVzXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyMTIzXCIpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuU3RvcnkyLmlubmVySFRNTCA9IFwiIFwiXHJcblN0b3J5My5pbm5lckhUTUwgPSBcIiBcIlxyXG5TdG9yeWxpc3QyLmxpc3RTdG9yeTIoKVxyXG5zZXJjaGJhci5zZWFyY2hiYXIyKClcclxuU3Rvcnk0LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuU3RvcnlGb3JtLlN0b3J5Rm9ybUJ1aWxkZXIoKVxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlN0b3J5Zm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5sZXQgY3VycmVudFVzZXJuYW1lID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJOYW1lXCIpXHJcbmxldCB1c2VyaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXIyXCIpXHJcbnVzZXJoZWFkZXIuaW5uZXJIVE1MID0gXCJXZWxjb21lIFwiICsgY3VycmVudFVzZXJuYW1lXHJcbkhlYWRlcjIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxubG9nb3V0Mi5pbm5lckhUTUwgPSBcIiBcIlxyXG5sb2dvdXQuY3JlYXRlQW5kQXBwZW5kTG9nb3V0KCk7XHJcbmxvZ291dDIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbi8vIHZhciBlZ2cgPSBuZXcgRWdnKCk7XHJcbi8vIGVnZy5hZGRDb2RlKFwiTSxFLFQsQSxMXCIsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgalF1ZXJ5KFwiI2VnZ2dpZlwiKS5mYWRlSW4oNTAwLCBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGpRdWVyeShcIiNlZ2dnaWZcIikuaGlkZSgpOyB9LCA1MDAwKTtcclxuLy8gICAgIH0pO1xyXG4vLyAgIH0pXHJcbi8vICAgLmFkZEhvb2soZnVuY3Rpb24oKXtcclxuLy8gICBsZXQgIHN0eWxlc2hlZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0eWxlc2hlZXRcIilcclxuLy8gICBzdHlsZXNoZWV0LnNldEF0dHJpYnV0ZShcImhyZWZcIiAsIFwic3R5bGVzL0FsdC5DU1NcIilcclxuLy8gYWxlcnQoXCJVbmxvY2tlZCBNZXRhbCBNb2RlXCIpXHJcbi8vICAgfSkubGlzdGVuKCk7XHJcblxyXG4vLyAgIHZhciBlZ2cyID0gbmV3IEVnZygpO1xyXG4vLyBlZ2cyLmFkZENvZGUoXCJTLEUsQVwiLCBmdW5jdGlvbigpIHtcclxuLy8gICAgIGpRdWVyeShcIiNlZ2dnaWYyXCIpLmZhZGVJbig1MDAsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHsgalF1ZXJ5KFwiI2VnZ2dpZjJcIikuaGlkZSgpOyB9LCA1MDAwKTtcclxuLy8gICAgIH0pO1xyXG4vLyAgIH0pXHJcbi8vICAgLmFkZEhvb2soZnVuY3Rpb24oKXtcclxuLy8gYWxlcnQoXCJVbmxvY2tlZCBNb3Rpb24gU2ljayBNb2RlXCIpXHJcbi8vIGxldCAgc3R5bGVzaGVldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3R5bGVzaGVldFwiKVxyXG4vLyBzdHlsZXNoZWV0LnNldEF0dHJpYnV0ZShcImhyZWZcIiAsIFwic3R5bGVzL21haW5jc3Nyb3RhdGUuY3NzXCIpXHJcbi8vICAgfSkubGlzdGVuKCk7XHJcblxyXG5cclxuLy8gICB2YXIgZWdnMyA9IG5ldyBFZ2coKTtcclxuLy8gICBlZ2czLmFkZENvZGUoXCJULEEsUixELEksU1wiLCBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgalF1ZXJ5KFwiI2VnZ2dpZjNcIikuZmFkZUluKDUwMCwgZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGpRdWVyeShcIiNlZ2dnaWYzXCIpLmhpZGUoKTsgfSwgNTAwMCk7XHJcbi8vICAgICAgIH0pO1xyXG4vLyAgICAgfSlcclxuLy8gICAgIC5hZGRIb29rKGZ1bmN0aW9uKCl7XHJcbi8vICAgYWxlcnQoXCJJbSB0aGUgRG9jdG9yXCIpXHJcbi8vICAgbGV0ICBzdHlsZXNoZWV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdHlsZXNoZWV0XCIpXHJcbi8vICAgc3R5bGVzaGVldC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIgLCBcInN0eWxlcy9tYWluY3NzdGFyZGlzLmNzc1wiKVxyXG4vLyAgICAgfSkubGlzdGVuKCk7XHJcblxyXG4gICAvLyAgdmFyIGVnZzQgPSBuZXcgRWdnKCk7XHJcbiAgIC8vICBlZ2c0LmFkZENvZGUoXCJ1cCx1cCxkb3duLGRvd24sbGVmdCxyaWdodCxsZWZ0LHJpZ2h0LGIsYVwiLCBmdW5jdGlvbigpIHtcclxuICAgLy8gICAgalF1ZXJ5KFwiI2VnZ2dpZjRcIikuZmFkZUluKDUwMCwgZnVuY3Rpb24oKSB7XHJcbiAgIC8vICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHsgalF1ZXJ5KFwiI2VnZ2dpZjRcIikuaGlkZSgpOyB9LCA1MDAwKTtcclxuICAgLy8gICAgICB9KTtcclxuICAgLy8gICAgfSlcclxuICAgLy8gICAgLmFkZEhvb2soZnVuY3Rpb24oKXtcclxuICAgLy8gIGFsZXJ0KFwiQ29kZSBBY2NlcHRlZFwiKVxyXG4gICAvLyAgICB9KS5saXN0ZW4oKTtcclxuICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJwYWdlIl19
