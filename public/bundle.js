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
    return fetch(`https://pipaplication.herokuapp.com/api/database.json/${resource}`).then(response => response.json());
  },

  getData3(resource) {
    return fetch(`https://pipaplication.herokuapp.com/api/database.json/Stories/${resource}`).then(response => response.json());
  },

  getData2(resource) {
    return fetch(`https://pipaplication.herokuapp.com/api/database.json/Stories?title_like=${resource}`).then(response => response.json());
  },

  getPayloadData(resource, payload) {
    return fetch(`https://pipaplication.herokuapp.com/api/database.json/${resource}/${payload}`).then(response => response.json());
  },

  postNewData(resource, payload) {
    return fetch(`https://pipaplication.herokuapp.com/api/database.json/${resource}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
  },

  putExistingStory(Storyid, StoryToEdit) {
    return fetch(`https://pipaplication.herokuapp.com/api/database.json/Stories/${Storyid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(StoryToEdit)
    });
  },

  deleteData(resource) {
    return fetch(`https://pipaplication.herokuapp.com/api/database.json/Stories/${resource}`, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL1N0b3J5L1N0b3J5QnVpbGRlci5qcyIsIi4uL3NjcmlwdHMvU3RvcnkvU3RvcnlFZGl0Rm9ybS5qcyIsIi4uL3NjcmlwdHMvU3RvcnkvU3RvcnlGb3JtLmpzIiwiLi4vc2NyaXB0cy9TdG9yeS9TdG9yeUxpc3QvbGlzdGJ1aWxkZXIuanMiLCIuLi9zY3JpcHRzL1N0b3J5L1N0b3J5TGlzdC9saXN0aXRvcmF0b3IuanMiLCIuLi9zY3JpcHRzL1N0b3J5L1N0b3J5TGlzdC9zZWFyY2hiYXIuanMiLCIuLi9zY3JpcHRzL1N0b3J5L1N0b3J5TGlzdC9zZWFyY2hsaXN0cmVzdWx0cy5qcyIsIi4uL3NjcmlwdHMvYXBpLmpzIiwiLi4vc2NyaXB0cy9oYXNoLmpzIiwiLi4vc2NyaXB0cy9sb2dpbi5qcyIsIi4uL3NjcmlwdHMvbG9nb3V0LmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIiwiLi4vc2NyaXB0cy9yZWdpc3Rlci5qcyIsIi4uL3NjcmlwdHMvc3BlY2lmaWNwYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBOztBQUNBOztBQUNBOzs7O0FBQ0EsTUFBTSxNQUFNLEdBQUc7QUFDWDtBQUNBLEVBQUEsWUFBWSxDQUFDLFFBQUQsRUFBVztBQUNuQjtBQUNBLFVBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCLENBQXJCLENBRm1CLENBR25COztBQUNBLFVBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQWxCLENBSm1CLENBS25COztBQUNBLFVBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQXJCLENBTm1CLENBT25COztBQUNBLFVBQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQXRCLENBUm1CLENBU25COztBQUNBLFVBQU0s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O0FBQ3hCLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFMLENBQWQsRUFBd0IsR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFMLENBQWQsRUFBd0IsR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFMLENBQWQsRUFBd0IsR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFMLENBQWQsRUFBd0IsR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFMLENBQWQsRUFBd0IsR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFMLENBQWQsRUFBd0IsR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFMLENBQWQsRUFBd0IsR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFMLENBQWQsRUFBd0IsR0FBeEIsRUFBNkIsU0FBN0IsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFMLENBQWQsRUFBd0IsR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFMLENBQWQsRUFBd0IsR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFMLENBQWQsRUFBd0IsR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFMLENBQWQsRUFBd0IsR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFMLENBQWQsRUFBd0IsR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFMLENBQWQsRUFBd0IsR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFMLENBQWQsRUFBd0IsR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFMLENBQWQsRUFBd0IsR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsU0FBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFMLENBQWQsRUFBd0IsR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFMLENBQWQsRUFBd0IsR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFMLENBQWQsRUFBd0IsR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFMLENBQWQsRUFBd0IsR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFMLENBQWQsRUFBd0IsR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFMLENBQWQsRUFBd0IsR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFMLENBQWQsRUFBd0IsR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFMLENBQWQsRUFBd0IsR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUNBLElBQUEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFMLENBQWQs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T0FBZCxHQUF3QixPQUF4QjtBQUNBLElBQUEsT0FBTyxDQUFDLFNBQVIsR0FBb0IsR0FBcEI7O0FBQ0Esb0JBQU8scUJBQVA7O0FBQ0EsSUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLE9BQWQsR0FBd0IsT0FBeEIsQ0F2QmlCLENBeUJqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQzs7QUF4RVcsQ0FBZjtlQTBFZSxRIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IEFQSSBmcm9tIFwiLi4vYXBpXCJcclxuaW1wb3J0IFN0b3J5RWRpdEZvcm0gZnJvbSBcIi4vU3RvcnlFZGl0Rm9ybVwiXHJcbmltcG9ydCBTdG9yeUZvcm0gZnJvbSBcIi4vU3RvcnlGb3JtXCJcclxuY29uc3QgU3RvcnlzID0ge1xyXG4gICAgLy9TdG9yeU9iaiAgaXMgcGFzZWQgaW4gZmFyIGRvd24gdGhlIGxpbmUgYnV0IGl0IGNvbWVzIGRpcmVjdGx5IGZyb20gYSBmb3IgZWFjaCBsb29wXHJcbiAgICBTdG9yeUJ1aWxkZXIoU3RvcnlPYmopIHtcclxuICAgICAgICAvL0NyZWF0ZXMgYW4gZWxlbWVudFxyXG4gICAgICAgIGNvbnN0IFN0b3J5QXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuU3RvcnlcIilcclxuICAgICAgICAvL0NyZWF0ZXMgYW4gZWxlbWVudFxyXG4gICAgICAgIGNvbnN0IFN0b3J5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgICAvL0NyZWF0ZXMgYW4gZWxlbWVudFxyXG4gICAgICAgIGNvbnN0IFN0b3J5UGljdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgLy9DcmVhdGVzIGFuIGVsZW1lbnRcclxuICAgICAgICBjb25zdCBTdG9yeVBpY3R1cmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAvL0NyZWF0ZXMgYW4gZWxlbWVudFxyXG4gICAgICAgIGNvbnN0IFN0b3J5UGljdHVyZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIC8vc2V0cyAgMSBvZiAzdmFyIHRvIHRoZSBwaWMgdXJsIGluIGRhdGFiYXNlXHJcbiAgICAgICAgY29uc3QgVkFSID0gU3RvcnlPYmoucGljdHVyZTtcclxuICAgICAgICAvL3NldHMgIDEgb2YgM3ZhciB0byB0aGUgcGljIHVybCBpbiBkYXRhYmFzZVxyXG4gICAgICAgIGNvbnN0IFZBUjIgPSBTdG9yeU9iai5waWN0dXJlMjtcclxuICAgICAgICAvL3NldHMgIDEgb2YgM3ZhciB0byB0aGUgcGljIHVybCBpbiBkYXRhYmFzZVxyXG4gICAgICAgIGNvbnN0IFZBUjMgPSBTdG9yeU9iai5waWN0dXJlMztcclxuICAgICAgICAvL3NldHMgc291cmNlIHRvIHZhciAgMVxyXG4gICAgICAgIFN0b3J5UGljdHVyZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYCR7VkFSfWApXHJcbiAgICAgICAgLy9zZXRzIHNvdXJjZSB0byB2YXIgIDJcclxuICAgICAgICBTdG9yeVBpY3R1cmUyLnNldEF0dHJpYnV0ZShcInNyY1wiLCBgJHtWQVIyfWApXHJcbiAgICAgICAgLy9zZXRzIHNvdXJjZSB0byB2YXIgIDNcclxuICAgICAgICBTdG9yeVBpY3R1cmUzLnNldEF0dHJpYnV0ZShcInNyY1wiLCBgJHtWQVIzfWApXHJcbiAgICAgICAgLy9DcmVhdGVzIGFuIGVsZW1lbnRcclxuICAgICAgICBjb25zdCBTdG9yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIC8vc2V0cyBjbGFzc1xyXG4gICAgICAgIFN0b3J5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGFyYWdyYXBoXCIpXHJcbiAgICAgICAgLy9DcmVhdGVzIGFuIGVsZW1lbnRcclxuICAgICAgICBjb25zdCBTdG9yeU91dHB1dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcclxuICAgICAgICAvL3NldHMgaWQgdG8gdGhlIG9iamVjdCBpZCBpbiB0aGUgZGF0YWJhc2VcclxuICAgICAgICBTdG9yeU91dHB1dFNlY3Rpb24uc2V0QXR0cmlidXRlKFwiSWRcIiwgYCR7U3RvcnlPYmouaWR9YClcclxuICAgICAgICAvL3NldHMgY2xhc3NcclxuICAgICAgICBTdG9yeU91dHB1dFNlY3Rpb24uc2V0QXR0cmlidXRlKFwiQ2xhc3NcIiwgXCJBcnRpMVwiKVxyXG4gICAgICAgIC8vYXBwZW5kcyB0aGUgZnJhZ21lbnQgdG8gdGhlIGdyZWF0ZXIgcGllaWNlXHJcbiAgICAgICAgU3RvcnlBcnRpY2xlLmFwcGVuZENoaWxkKFN0b3J5T3V0cHV0U2VjdGlvbik7XHJcbiAgICAgICAgLy9hcHBlbmRzIHRoZSAgdGhlIGV2ZW4gc21hbGxlciBmcmFnbWVudG5zIHRvIHRoZSBmcmFnbWVudFxyXG4gICAgICAgIFN0b3J5T3V0cHV0U2VjdGlvbi5hcHBlbmRDaGlsZChTdG9yeU5hbWUpO1xyXG4gICAgICAgIC8vYXBwZW5kcyB0aGUgIHRoZSBldmVuIHNtYWxsZXIgZnJhZ21lbnRucyB0byB0aGUgZnJhZ21lbnRcclxuICAgICAgICBTdG9yeU91dHB1dFNlY3Rpb24uYXBwZW5kQ2hpbGQoU3RvcnlQaWN0dXJlKTtcclxuICAgICAgICAvL2FwcGVuZHMgdGhlICB0aGUgZXZlbiBzbWFsbGVyIGZyYWdtZW50bnMgdG8gdGhlIGZyYWdtZW50XHJcbiAgICAgICAgU3RvcnlPdXRwdXRTZWN0aW9uLmFwcGVuZENoaWxkKFN0b3J5UGljdHVyZTIpO1xyXG4gICAgICAgIC8vYXBwZW5kcyB0aGUgIHRoZSBldmVuIHNtYWxsZXIgZnJhZ21lbnRucyB0byB0aGUgZnJhZ21lbnRcclxuICAgICAgICBTdG9yeU91dHB1dFNlY3Rpb24uYXBwZW5kQ2hpbGQoU3RvcnlQaWN0dXJlMyk7XHJcbiAgICAgICAgLy9hcHBlbmRzIHRoZSAgdGhlIGV2ZW4gc21hbGxlciBmcmFnbWVudG5zIHRvIHRoZSBmcmFnbWVudFxyXG4gICAgICAgIFN0b3J5T3V0cHV0U2VjdGlvbi5hcHBlbmRDaGlsZChTdG9yeSk7XHJcbiAgICAgICAgLy9zZXRzICB0aGUgdGV4dCB0byBhIHBpZWNlIGluIHRoZSBkYXRhYmFzZVxyXG4gICAgICAgIFN0b3J5TmFtZS50ZXh0Q29udGVudCA9IFN0b3J5T2JqLnRpdGxlO1xyXG4gICAgICAgIC8vc2V0cyAgdGhlIHRleHQgdG8gYSBwaWVjZSBpbiB0aGUgZGF0YWJhc2VcclxuICAgICAgICBTdG9yeVBpY3R1cmUudGV4dENvbnRlbnQgPSBTdG9yeU9iai5waWN0dXJlO1xyXG4gICAgICAgIC8vc2V0cyAgdGhlIHRleHQgdG8gYSBwaWVjZSBpbiB0aGUgZGF0YWJhc2VcclxuICAgICAgICBTdG9yeVBpY3R1cmUyLnRleHRDb250ZW50ID0gU3RvcnlPYmoucGljdHVyZTI7XHJcbiAgICAgICAgLy9zZXRzICB0aGUgdGV4dCB0byBhIHBpZWNlIGluIHRoZSBkYXRhYmFzZVxyXG4gICAgICAgIFN0b3J5UGljdHVyZTMudGV4dENvbnRlbnQgPSBTdG9yeU9iai5waWN0dXJlMztcclxuICAgICAgICAvL3NldHMgIHRoZSB0ZXh0IHRvIGEgcGllY2UgaW4gdGhlIGRhdGFiYXNlXHJcbiAgICAgICAgU3RvcnkudGV4dENvbnRlbnQgPSBTdG9yeU9iai5UZXh0O1xyXG4gICAgICAgIC8vQ3JlYXRlcyBhbiBlbGVtZW50XHJcbiAgICAgICAgY29uc3QgQmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgICAgICAvL3NldHMgY2xhc3NcclxuICAgICAgICBCYWNrLnNldEF0dHJpYnV0ZShcIkNsYXNzXCIsIFwiQmFja0J1dHRvblwiKVxyXG4gICAgICAgIC8vc2V0cyAgdGhlIHRleHRcclxuICAgICAgICBCYWNrLnRleHRDb250ZW50ID0gXCJCYWNrXCJcclxuICAgICAgICAvL3NldHMgY2xpY2sgZXZlbnQgb24gYmFjayBidXR0b24gd2hlbiBjbGlja2VkXHJcbiAgICAgICAgQmFjay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBhZGQgdGhlIHN0eWxlIG9mIE5PTkUgdG8gdGhlIHF1ZWVyeSBhbmRcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5BcnRpMVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIC8vICBydW4gdGhlIGZ1bmN0aWlvblxyXG4gICAgICAgICAgICBTdG9yeUZvcm0uU3RvcnlGb3JtQnVpbGRlcigpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvL2FkZHMgYmFjayBidXR0b24gdG8gZnJhZ21lbnRcclxuICAgICAgICBTdG9yeU91dHB1dFNlY3Rpb24uYXBwZW5kQ2hpbGQoQmFjayk7XHJcblxyXG4gICAgICAgICAvL0NyZWF0ZXMgYW4gZWxlbWVudFxyXG4gICAgICAgIGNvbnN0IFN0b3J5RWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgLy9hZGRzIEVkaXQgYnV0dG9uIHRvIGZyYWdtZW50XHJcbiAgICAgICAgU3RvcnlPdXRwdXRTZWN0aW9uLmFwcGVuZENoaWxkKFN0b3J5RWRpdEJ1dHRvbik7XHJcbiAgICAgICAgLy9zZXRzIHRleHRcclxuICAgICAgICBTdG9yeUVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcclxuICAgICAgICAvL3NldHMgY2xhc3NcclxuICAgICAgICBTdG9yeUVkaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiQ2xhc3NcIiwgXCJFZGl0QnV0dG9uXCIpXHJcbiAgICAgICAgLy8gY3JlYXRlcyBhIGNsaWNrIGV2ZW50IG9uIGVkaXQgYnV0dG9uIHdoZW4gY2xpY2tlZFxyXG4gICAgICAgIFN0b3J5RWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB3aXBlIHRoZSBpbm5lciBodG1sIG9mIHRoZSBidXR0b24gZWxsZW1lbnRcclxuICAgICAgICAgICAgU3RvcnlFZGl0QnV0dG9uLmlubmVySFRNTCA9IFwiIFwiXHJcbiAgICAgICAgICAgIC8vc2V0IHRoZSBzdHlsZSBkaXNwbGF5IG9mIHRoZSBidXR0b24gZWxsZW1lbnQgdG8gbm9uZVxyXG4gICAgICAgICAgICBTdG9yeUVkaXRCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAvL3VzZWQgdG8gZ3JhYmUgc3BlY2lmaWMgaWRzXHJcbiAgICAgICAgICAgIGxldCBhcnRpY2xlSWQgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5pZDtcclxuICAgICAgICAgICAgLy9ydW5zIHN0b3J5IGZvcm0gZnVuY3Rpb24gYW5kIHBhc3NlcyB0byBwYXJhbWF0ZXJzXHJcbiAgICAgICAgICAgIFN0b3J5RWRpdEZvcm0uY3JlYXRlQW5kQXBwZW5kRm9ybShTdG9yeU9iaiwgYXJ0aWNsZUlkKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgU3RvcnlEZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIFN0b3J5T3V0cHV0U2VjdGlvbi5hcHBlbmRDaGlsZChTdG9yeURlbGV0ZUJ1dHRvbik7XHJcbiAgICAgICAgU3RvcnlEZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xyXG4gICAgICAgIFN0b3J5RGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcIkNsYXNzXCIsIFwiRGVsZXRlQnV0dG9uXCIpXHJcbiAgICAgICAgU3RvcnlEZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IFN0b3J5SWQyID0gU3RvcnlPYmouaWRcclxuICAgICAgICAgICAgQVBJLmRlbGV0ZURhdGEoU3RvcnlJZDIpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuQXJ0aTFcIilcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGl0bGVkZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjVGl0bGUtLSR7U3RvcnlPYmouaWR9YClcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZWRlbGV0ZS5pbm5lckhUTUwgPSBcIiBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlZGVsZXRlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3RhcnQuaW5uZXJIVE1MID0gXCIgXCJcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLkFydGkxXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlN0b3J5XCIpLmlubmVySFRNTCA9IFwiIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgU3RvcnlGb3JtLlN0b3J5Rm9ybUJ1aWxkZXIoU3RvcnlPYmopXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKFZBUiA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIFN0b3J5UGljdHVyZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFZBUjIgPT0gXCJcIikge1xyXG4gICAgICAgICAgICBTdG9yeVBpY3R1cmUyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoVkFSMyA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIFN0b3J5UGljdHVyZTMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN0b3J5cyIsImltcG9ydCBBUEkgZnJvbSBcIi4uL2FwaVwiXHJcbmltcG9ydCBTdG9yeWxpc3QyIGZyb20gXCIuLi9TdG9yeS9TdG9yeUxpc3QvbGlzdGl0b3JhdG9yXCJcclxuaW1wb3J0IFN0b3J5Rm9ybSBmcm9tIFwiLi9TdG9yeUZvcm1cIlxyXG5jb25zdCBTdG9yeUVkaXRGb3JtID0ge1xyXG4gIGNyZWF0ZUFuZEFwcGVuZEZvcm0oU3RvcnlPYmosIGFydGljbGVJZCkge1xyXG4gICAgbGV0IFN0b3J5TmFtZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgIFN0b3J5TmFtZUZpZWxkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2VsZWN0b3JcIilcclxuICAgIGxldCBTdG9yeVN0b3J5c0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgIFN0b3J5U3RvcnlzRmllbGQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzZWxlY3RvclwiKVxyXG4gICAgbGV0IFN0b3J5UGljdHVyZXNGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICBTdG9yeVBpY3R1cmVzRmllbGQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzZWxlY3RvclwiKVxyXG4gICAgbGV0IFN0b3J5TmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICBTdG9yeU5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiIFRpdGxlXCJcclxuICAgIGxldCBTdG9yeU5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgU3RvcnlOYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiQ2xhc3NcIiwgXCJJbnB1dDFcIilcclxuICAgIFN0b3J5TmFtZUlucHV0LnZhbHVlID0gU3RvcnlPYmoudGl0bGVcclxuXHJcbiAgICBTdG9yeU5hbWVGaWVsZC5hcHBlbmRDaGlsZChTdG9yeU5hbWVJbnB1dClcclxuICAgIFN0b3J5TmFtZUZpZWxkLmFwcGVuZENoaWxkKFN0b3J5TmFtZUxhYmVsKVxyXG5cclxuICAgIGxldCBTdG9yeVBpY3R1cmVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gICAgbGV0IFN0b3J5UGljdHVyZUxhYmVsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gICAgbGV0IFN0b3J5UGljdHVyZUxhYmVsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4gICAgU3RvcnlQaWN0dXJlTGFiZWwudGV4dENvbnRlbnQgPSBcIiBQaWN0dXJlXCJcclxuICAgIFN0b3J5UGljdHVyZUxhYmVsMi50ZXh0Q29udGVudCA9IFwiIFBpY3R1cmUgMlwiXHJcbiAgICBTdG9yeVBpY3R1cmVMYWJlbDMudGV4dENvbnRlbnQgPSBcIiBQaWN0dXJlIDNcIlxyXG4gICAgbGV0IFN0b3J5UGljdHVyZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICBTdG9yeVBpY3R1cmVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJDbGFzc1wiLCBcIklucHV0NVwiKVxyXG4gICAgbGV0IFN0b3J5UGljdHVyZUlucHV0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgU3RvcnlQaWN0dXJlSW5wdXQyLnNldEF0dHJpYnV0ZShcIkNsYXNzXCIsIFwiSW5wdXQ0XCIpXHJcbiAgICBsZXQgU3RvcnlQaWN0dXJlSW5wdXQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICBTdG9yeVBpY3R1cmVJbnB1dDMuc2V0QXR0cmlidXRlKFwiQ2xhc3NcIiwgXCJJbnB1dDNcIilcclxuICAgIFN0b3J5UGljdHVyZUlucHV0LnZhbHVlID0gU3RvcnlPYmoucGljdHVyZVxyXG4gICAgU3RvcnlQaWN0dXJlSW5wdXQyLnZhbHVlID0gU3RvcnlPYmoucGljdHVyZTJcclxuICAgIFN0b3J5UGljdHVyZUlucHV0My52YWx1ZSA9IFN0b3J5T2JqLnBpY3R1cmUzXHJcblxyXG4gICAgU3RvcnlQaWN0dXJlc0ZpZWxkLmFwcGVuZENoaWxkKFN0b3J5UGljdHVyZUlucHV0KVxyXG4gICAgU3RvcnlQaWN0dXJlc0ZpZWxkLmFwcGVuZENoaWxkKFN0b3J5UGljdHVyZUxhYmVsKVxyXG5cclxuICAgIFN0b3J5UGljdHVyZXNGaWVsZC5hcHBlbmRDaGlsZChTdG9yeVBpY3R1cmVJbnB1dDIpXHJcbiAgICBTdG9yeVBpY3R1cmVzRmllbGQuYXBwZW5kQ2hpbGQoU3RvcnlQaWN0dXJlTGFiZWwyKVxyXG5cclxuICAgIFN0b3J5UGljdHVyZXNGaWVsZC5hcHBlbmRDaGlsZChTdG9yeVBpY3R1cmVJbnB1dDMpXHJcbiAgICBTdG9yeVBpY3R1cmVzRmllbGQuYXBwZW5kQ2hpbGQoU3RvcnlQaWN0dXJlTGFiZWwzKVxyXG5cclxuXHJcblxyXG5cclxuICAgIGxldCBTdG9yeVN0b3J5c0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICBTdG9yeVN0b3J5c0xhYmVsLnRleHRDb250ZW50ID0gXCJTdG9yeVwiXHJcbiAgICBsZXQgU3RvcnlTdG9yeXNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKVxyXG4gICAgU3RvcnlTdG9yeXNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJDbGFzc1wiLCBcIklucHV0MlwiKVxyXG4gICAgU3RvcnlTdG9yeXNJbnB1dC52YWx1ZSA9IFN0b3J5T2JqLlRleHRcclxuXHJcbiAgICBTdG9yeVN0b3J5c0ZpZWxkLmFwcGVuZENoaWxkKFN0b3J5U3RvcnlzSW5wdXQpXHJcbiAgICBTdG9yeVN0b3J5c0ZpZWxkLmFwcGVuZENoaWxkKFN0b3J5U3RvcnlzTGFiZWwpXHJcblxyXG5cclxuICAgIGxldCB1cGRhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICB1cGRhdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIlVwZGF0ZVwiXHJcbiAgICBsZXQgU3RvcnlJdGVtQXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuQXJ0aTFcIilcclxuICAgIFN0b3J5SXRlbUFydGljbGUuaW5uZXJIVE1MID0gXCIgXCJcclxuICAgIFN0b3J5SXRlbUFydGljbGUuYXBwZW5kQ2hpbGQoU3RvcnlOYW1lRmllbGQpXHJcbiAgICBTdG9yeUl0ZW1BcnRpY2xlLmFwcGVuZENoaWxkKFN0b3J5UGljdHVyZXNGaWVsZClcclxuICAgIFN0b3J5SXRlbUFydGljbGUuYXBwZW5kQ2hpbGQoU3RvcnlTdG9yeXNGaWVsZClcclxuICAgIFN0b3J5SXRlbUFydGljbGUuYXBwZW5kQ2hpbGQodXBkYXRlQnV0dG9uKVxyXG4gICAgdXBkYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIik7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRVc2VySWQgPSBKU09OLnBhcnNlKHVzZXJJZCk7XHJcbiAgICAgIGxldCBlZGl0ZWRTdG9yeSA9IHtcclxuICAgICAgICB0aXRsZTogU3RvcnlOYW1lSW5wdXQudmFsdWUsXHJcbiAgICAgICAgcGljdHVyZTogU3RvcnlQaWN0dXJlSW5wdXQudmFsdWUsXHJcbiAgICAgICAgcGljdHVyZTI6IFN0b3J5UGljdHVyZUlucHV0Mi52YWx1ZSxcclxuICAgICAgICBwaWN0dXJlMzogU3RvcnlQaWN0dXJlSW5wdXQzLnZhbHVlLFxyXG4gICAgICAgIFRleHQ6IFN0b3J5U3RvcnlzSW5wdXQudmFsdWUsXHJcbiAgICAgICAgdXNlcklkOiBjdXJyZW50VXNlcklkXHJcbiAgICAgIH1cclxuICAgICAgbGV0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLklucHV0MVwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhuYW1lLnZhbHVlKVxyXG4gICAgICAvL2Zvcm0gdmFsaWRhdGlvbiB1c2luZyBhbiBpZiBlbHNlIHN0YXRtZW50XHJcbiAgICAgIGlmIChuYW1lLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGFsZXJ0KFwiTm8gU3RvcnkhXCIpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgU3RvcnlFZGl0Rm9ybS5kb2l0bm93KGFydGljbGVJZCwgZWRpdGVkU3RvcnksIFN0b3J5T2JqKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZG9pdG5vdyhhcnRpY2xlSWQsIGVkaXRlZFN0b3J5LCBTdG9yeU9iaikge1xyXG4gICAgU3RvcnlGb3JtLlN0b3J5Rm9ybUJ1aWxkZXIoKVxyXG4gICAgQVBJLnB1dEV4aXN0aW5nU3RvcnkoYXJ0aWNsZUlkLCBlZGl0ZWRTdG9yeSwgU3RvcnlPYmopXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+ICB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5TdG9yeVwiKS5pbm5lckhUTUwgPSBcIiBcIlxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuU3RvcnkyXCIpLmlubmVySFRNTCA9IFwiIFwiXHJcbiAgICAgICAgU3RvcnlsaXN0Mi5saXN0U3RvcnkyKClcclxuICAgICAgfSlcclxuICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN0b3J5RWRpdEZvcm1cclxuIiwiaW1wb3J0IEFQSSBmcm9tIFwiLi4vYXBpXCJcclxuaW1wb3J0IFN0b3J5bGlzdDIgZnJvbSBcIi4vU3RvcnlMaXN0L2xpc3RpdG9yYXRvclwiXHJcblxyXG5jb25zdCBTdG9yeUZvcm1TdG9yeUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG5jb25zdCBTdG9yeUZvcm1TdG9yeXNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuY29uc3QgUGljdHVyZXNpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuY29uc3QgUGljdHVyZXNpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbmNvbnN0IFBpY3R1cmVzaW5wdXQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG5cclxuY29uc3QgU3RvcnlGb3JtID0ge1xyXG4gICAgU3RvcnlGb3JtQnVpbGRlcigpIHtcclxuICAgICAgICBjb25zdCBTdG9yeUFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlN0b3J5Zm9ybVwiKTtcclxuICAgICAgICBsZXQgU3RvcnlGb3JtU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Rvcmllc1wiKVxyXG4gICAgICAgIFN0b3J5QXJ0aWNsZS5hcHBlbmQoU3RvcnlGb3JtU2VjdGlvbik7XHJcbiAgICAgICAgY29uc3QgU3RvcnlGb3JtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgICAgIFN0b3J5Rm9ybUhlYWRlci5zZXRBdHRyaWJ1dGUoXCJDbGFzc1wiLCBcIlN0b3J5SGVhZGVyXCIpXHJcbiAgICAgICAgU3RvcnlGb3JtU2VjdGlvbi5hcHBlbmRDaGlsZChTdG9yeUZvcm1IZWFkZXIpO1xyXG4gICAgICAgIFN0b3J5Rm9ybUhlYWRlci50ZXh0Q29udGVudCA9IFwiQWRkIFN0b3J5XCI7XHJcbiAgICAgICAgU3RvcnlGb3JtU2VjdGlvbi5hcHBlbmRDaGlsZChTdG9yeUZvcm1TdG9yeUlucHV0KTtcclxuICAgICAgICBTdG9yeUZvcm1TdG9yeUlucHV0LnBsYWNlaG9sZGVyID0gXCJTdG9yeSBOYW1lXCI7XHJcbiAgICAgICAgU3RvcnlGb3JtU3RvcnlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJDbGFzc1wiLCBcIlN0b3J5aW5wdXRcIilcclxuICAgICAgICBTdG9yeUZvcm1TZWN0aW9uLmFwcGVuZENoaWxkKFBpY3R1cmVzaW5wdXQpO1xyXG4gICAgICAgIFBpY3R1cmVzaW5wdXQudGV4dENvbnRlbnQgPSBcIkFkZCBQaWN0dXJlXCI7XHJcbiAgICAgICAgUGljdHVyZXNpbnB1dC5wbGFjZWhvbGRlciA9IFwiUGljdHVyZSBVUkxcIjtcclxuICAgICAgICBQaWN0dXJlc2lucHV0LnNldEF0dHJpYnV0ZShcIkNsYXNzXCIsIFwiUGljaW5wdXQxXCIpXHJcbiAgICAgICAgU3RvcnlGb3JtU2VjdGlvbi5hcHBlbmRDaGlsZChQaWN0dXJlc2lucHV0Mik7XHJcbiAgICAgICAgUGljdHVyZXNpbnB1dDIudGV4dENvbnRlbnQgPSBcIkFkZCBQaWN0dXJlXCI7XHJcbiAgICAgICAgUGljdHVyZXNpbnB1dDIucGxhY2Vob2xkZXIgPSBcIlBpY3R1cmUgVVJMXCI7XHJcbiAgICAgICAgUGljdHVyZXNpbnB1dDIuc2V0QXR0cmlidXRlKFwiQ2xhc3NcIiwgXCJQaWNpbnB1dDJcIilcclxuICAgICAgICBTdG9yeUZvcm1TZWN0aW9uLmFwcGVuZENoaWxkKFBpY3R1cmVzaW5wdXQzKTtcclxuICAgICAgICBQaWN0dXJlc2lucHV0My50ZXh0Q29udGVudCA9IFwiQWRkIFBpY3R1cmVcIjtcclxuICAgICAgICBQaWN0dXJlc2lucHV0My5wbGFjZWhvbGRlciA9IFwiUGljdHVyZSBVUkxcIjtcclxuICAgICAgICBQaWN0dXJlc2lucHV0My5zZXRBdHRyaWJ1dGUoXCJDbGFzc1wiLCBcIlBpY2lucHV0M1wiKVxyXG4gICAgICAgIFN0b3J5Rm9ybVNlY3Rpb24uYXBwZW5kQ2hpbGQoU3RvcnlGb3JtU3RvcnlzSW5wdXQpO1xyXG4gICAgICAgIFN0b3J5Rm9ybVN0b3J5c0lucHV0LnBsYWNlaG9sZGVyID0gXCJTdG9yeVwiO1xyXG4gICAgICAgIGxldCBicmVhazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIilcclxuICAgICAgICBTdG9yeUZvcm1TZWN0aW9uLmFwcGVuZENoaWxkKGJyZWFrMSlcclxuICAgICAgICBTdG9yeUZvcm1TdG9yeXNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJDbGFzc1wiLCBcIlN0b3J5dGV4dFwiKVxyXG4gICAgICAgIGNvbnN0IGFkZFN0b3J5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBhZGRTdG9yeUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNlbGN0b3JidXR0b24xXCIpXHJcbiAgICAgICAgU3RvcnlGb3JtU2VjdGlvbi5hcHBlbmRDaGlsZChhZGRTdG9yeUJ1dHRvbik7XHJcbiAgICAgICAgYWRkU3RvcnlCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBTdG9yeVwiO1xyXG4gICAgICAgIGFkZFN0b3J5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vcnVkZW1lbnRyeSBmb3JtIHZhbGlkYXRpb25cclxuICAgICAgICAgICAgbGV0IG5hbWVpcG51dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuU3RvcnlpbnB1dFwiKVxyXG4gICAgICAgICAgICBpZiAobmFtZWlwbnV0LnZhbHVlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIk5vIFN0b3J5IVwiKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgKG5hbWVpcG51dC52YWx1ZS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgU3RvcnlGb3JtLmFkZFN0b3J5VG9KU09OKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgYWRkU3RvcnlUb0pTT04oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJCdXR0b24gV29ya3NcIik7XHJcbiAgICAgICAgY29uc3QgU3RvcnlUaXRsZSA9IFN0b3J5Rm9ybVN0b3J5SW5wdXQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgU3RvcnlTdG9yeXMgPSBTdG9yeUZvcm1TdG9yeXNJbnB1dC52YWx1ZTtcclxuICAgICAgICBjb25zdCBQaWN0dXJlczIgPSBQaWN0dXJlc2lucHV0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IFBpY3R1cmVzMyA9IFBpY3R1cmVzaW5wdXQyLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IFBpY3R1cmVzID0gUGljdHVyZXNpbnB1dDMudmFsdWU7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIik7XHJcbiAgICAgICAgY29uc3QgdXNlcklkID0gSlNPTi5wYXJzZShjdXJyZW50VXNlcklkKTtcclxuXHJcbiAgICAgICAgbGV0IG5ld1N0b3J5ID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogU3RvcnlUaXRsZSxcclxuICAgICAgICAgICAgcGljdHVyZTogUGljdHVyZXMsXHJcbiAgICAgICAgICAgIHBpY3R1cmUyOiBQaWN0dXJlczIsXHJcbiAgICAgICAgICAgIHBpY3R1cmUzOiBQaWN0dXJlczMsXHJcbiAgICAgICAgICAgIFRleHQ6IFN0b3J5U3RvcnlzLFxyXG4gICAgICAgICAgICB1c2VySWQ6IHVzZXJJZFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3U3RvcnkpO1xyXG4gICAgICAgIEFQSS5wb3N0TmV3RGF0YShcIlN0b3JpZXNcIiwgbmV3U3RvcnkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuU3RvcnlcIikuaW5uZXJIVE1MID0gXCIgXCJcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuU3RvcnkyXCIpLmlubmVySFRNTCA9IFwiIFwiXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIC8vY2xlYXJlaW5nIGFuZCByZWVudGVyaW5nIHBsYWNlaG9sZGVyIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5TdG9yeWlucHV0XCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuU3RvcnlpbnB1dFwiKS5wbGFjZWhvbGRlciA9IFwiU3RvcnkgTmFtZVwiO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5TdG9yeXRleHRcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5TdG9yeXRleHRcIikucGxhY2Vob2xkZXIgPSBcIlN0b3J5XCI7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlBpY2lucHV0MVwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlBpY2lucHV0MVwiKS5wbGFjZWhvbGRlciA9IFwiUGljdHVyZSBVUkxcIjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuUGljaW5wdXQyXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuUGljaW5wdXQyXCIpLnBsYWNlaG9sZGVyID0gXCJQaWN0dXJlIFVSTFwiO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5QaWNpbnB1dDNcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5QaWNpbnB1dDNcIikucGxhY2Vob2xkZXIgPSBcIlBpY3R1cmUgVVJMXCI7XHJcbiAgICAgICAgICAgICAgICBTdG9yeWxpc3QyLmxpc3RTdG9yeTIoKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcnlGb3JtIiwiaW1wb3J0IFN0b3JpZXMgZnJvbSBcIi4uL1N0b3J5QnVpbGRlclwiXHJcbmNvbnN0IFN0b3J5c0xpc3QzID0ge1xyXG4gICAgU3RvcnlMaXN0QnVpbGRlcjUoU3RvcnlPYmopIHtcclxuICAgICAgICBjb25zdCBTdG9yeUFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlN0b3J5MlwiKVxyXG4gICAgICAgIGNvbnN0IFN0b3J5TmFtZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgICAgU3RvcnlOYW1lMi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgVGl0bGUtLSR7U3RvcnlPYmouaWR9YClcclxuICAgICAgICBTdG9yeU5hbWUyLnNldEF0dHJpYnV0ZShcIkNsYXNzXCIsIFwiVGl0bGUwXCIpXHJcbiAgICAgICAgY29uc3QgU3RvcnlPdXRwdXRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XHJcbiAgICAgICAgU3RvcnlPdXRwdXRTZWN0aW9uLmFwcGVuZENoaWxkKFN0b3J5TmFtZTIpO1xyXG4gICAgICAgIFN0b3J5QXJ0aWNsZS5hcHBlbmRDaGlsZChTdG9yeU91dHB1dFNlY3Rpb24pO1xyXG4gICAgICAgIFN0b3J5TmFtZTIudGV4dENvbnRlbnQgPSBTdG9yeU9iai50aXRsZTtcclxuICAgICAgICBTdG9yeU5hbWUyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBTdG9yaWVzY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdG9yaWVzXCIpXHJcbiAgICAgICAgICAgIFN0b3JpZXNjb250YWluZXIuaW5uZXJIVE1MID0gXCIgXCJcclxuICAgICAgICAgICAgbGV0IGNsZWFyY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuU3RvcnlcIilcclxuICAgICAgICAgICAgY2xlYXJjb250ZW50LmlubmVySFRNTCA9IFwiIFwiXHJcbiAgICAgICAgICAgIFN0b3JpZXMuU3RvcnlCdWlsZGVyKFN0b3J5T2JqKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yeXNMaXN0M1xyXG5cclxuIiwiaW1wb3J0IEFQSSBmcm9tIFwiLi4vLi4vYXBpXCJcclxuaW1wb3J0IFN0b3J5c0xpc3QzIGZyb20gXCIuL2xpc3RidWlsZGVyXCJcclxuY29uc3QgU3RvcnlsaXN0MiA9IHtcclxuICAgIGxpc3RTdG9yeTIoKSB7XHJcbiAgICAgICAgQVBJLmdldERhdGEoXCJTdG9yaWVzXCIpXHJcbiAgICAgICAgICAgIC50aGVuKGFsbFN0b3JpZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxsU3Rvcmllcy5mb3JFYWNoKFN0b3J5T2JqID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVc2VySWQgPSBKU09OLnBhcnNlKHVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFN0b3J5T2JqLnVzZXJJZCA9PT0gY3VycmVudFVzZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdG9yeXNMaXN0My5TdG9yeUxpc3RCdWlsZGVyNShTdG9yeU9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU3RvcnlsaXN0MiIsImltcG9ydCBTdG9yeWxpc3Q0IGZyb20gXCIuL3NlYXJjaGxpc3RyZXN1bHRzXCJcclxuaW1wb3J0IEFQSSBmcm9tIFwiLi4vLi4vYXBpXCJcclxuY29uc3Qgc2VyY2hiYXIgPSB7XHJcbiAgc2VhcmNoYmFyMigpIHtcclxuICAgIGxldCBzdG9yeWNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuU3RvcnkzXCIpXHJcbiAgICBjb25zdCBzZWFyY2hpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJbnB1dFwiKVxyXG4gICAgc2VhcmNoaW5wdXQudGV4dENvbnRlbnQgPSBcIkFkZCBTZWFyY2hcIjtcclxuICAgIHNlYXJjaGlucHV0LnNldEF0dHJpYnV0ZShcIklkXCIsIFwiU2VhcmNoYmFyXCIpXHJcbiAgICBzZWFyY2hpbnB1dC5wbGFjZWhvbGRlciA9IFwiU2VhcmNoXCI7XHJcbiAgICBsZXQgc2VhcmNoYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgbGV0IGJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpXHJcbiAgICBzZWFyY2hidXR0b24uc2V0QXR0cmlidXRlKFwiQ2xhc3NcIiwgXCJTZWFyY2hCdXR0b25cIilcclxuICAgIHNlYXJjaGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2VhcmNoXCJcclxuICAgIHN0b3J5Y29udGFpbmVyLmFwcGVuZChzZWFyY2hpbnB1dClcclxuICAgIHN0b3J5Y29udGFpbmVyLmFwcGVuZChicilcclxuICAgIHN0b3J5Y29udGFpbmVyLmFwcGVuZChzZWFyY2hidXR0b24pXHJcbiAgICBzZWFyY2hidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5TdG9yeTJcIikuaW5uZXJIVE1MID0gXCIgXCJcclxuICAgICAgbGV0IHNlYXJjaGJhcnF1ZWVyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiU2VhcmNoYmFyXCIpLnZhbHVlXHJcbiAgICAgIEFQSS5nZXREYXRhMihzZWFyY2hiYXJxdWVlcnkpXHJcbiAgICAgIC8vYSBmb3JtIG9mIHZhbGlkYXRpb24gZm9yIHRoZSBmZXRjaCBjYWxsIHNvIGl0IFdpbGwgbm90ICBicmVha1xyXG4gICAgICBpZiAoc2VhcmNoYmFycXVlZXJ5ICE9IFwiIFwiKSB7XHJcbiAgICAgICAgc2VhcmNoYmFycXVlZXJ5ID0gXCIgXCI7XHJcbiAgICAgICAgU3RvcnlsaXN0NC5saXN0U3Rvcnk0KClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgc2VyY2hiYXIiLCJpbXBvcnQgQVBJIGZyb20gXCIuLi8uLi9hcGlcIlxyXG5pbXBvcnQgU3RvcnlzTGlzdDUgZnJvbSBcIi4vbGlzdGJ1aWxkZXJcIlxyXG5jb25zdCBTdG9yeWxpc3Q0ID0ge1xyXG4gICAgbGlzdFN0b3J5NCgpIHtcclxuICAgICAgICBsZXQgU2VhcmNoSW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiU2VhcmNoYmFyXCIpLnZhbHVlXHJcbiAgICAgICAgQVBJLmdldERhdGEyKFNlYXJjaElucHV0VmFsdWUpXHJcbiAgICAgICAgICAgIC50aGVuKGFsbFN0b3JpZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxsU3Rvcmllcy5mb3JFYWNoKFN0b3J5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVc2VySWQgPSBKU09OLnBhcnNlKHVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFN0b3J5LnVzZXJJZCA9PT0gY3VycmVudFVzZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdG9yeXNMaXN0NS5TdG9yeUxpc3RCdWlsZGVyNShTdG9yeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU3RvcnlsaXN0NCIsImNvbnN0IEFQSSA9IHtcclxuXHJcbiAgICBnZXREYXRhKHJlc291cmNlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwczovL3BpcGFwbGljYXRpb24uaGVyb2t1YXBwLmNvbS9hcGkvZGF0YWJhc2UuanNvbi8ke3Jlc291cmNlfWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIH0sXHJcbiAgICBnZXREYXRhMyhyZXNvdXJjZSkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9waXBhcGxpY2F0aW9uLmhlcm9rdWFwcC5jb20vYXBpL2RhdGFiYXNlLmpzb24vU3Rvcmllcy8ke3Jlc291cmNlfWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIH0sXHJcbiAgICBnZXREYXRhMihyZXNvdXJjZSkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9waXBhcGxpY2F0aW9uLmhlcm9rdWFwcC5jb20vYXBpL2RhdGFiYXNlLmpzb24vU3Rvcmllcz90aXRsZV9saWtlPSR7cmVzb3VyY2V9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgfSxcclxuICAgIGdldFBheWxvYWREYXRhKHJlc291cmNlLCBwYXlsb2FkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwczovL3BpcGFwbGljYXRpb24uaGVyb2t1YXBwLmNvbS9hcGkvZGF0YWJhc2UuanNvbi8ke3Jlc291cmNlfS8ke3BheWxvYWR9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgfSxcclxuICAgIHBvc3ROZXdEYXRhKHJlc291cmNlLCBwYXlsb2FkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwczovL3BpcGFwbGljYXRpb24uaGVyb2t1YXBwLmNvbS9hcGkvZGF0YWJhc2UuanNvbi8ke3Jlc291cmNlfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZClcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIHB1dEV4aXN0aW5nU3RvcnkoU3RvcnlpZCwgU3RvcnlUb0VkaXQpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vcGlwYXBsaWNhdGlvbi5oZXJva3VhcHAuY29tL2FwaS9kYXRhYmFzZS5qc29uL1N0b3JpZXMvJHtTdG9yeWlkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShTdG9yeVRvRWRpdClcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIGRlbGV0ZURhdGEocmVzb3VyY2UpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vcGlwYXBsaWNhdGlvbi5oZXJva3VhcHAuY29tL2FwaS9kYXRhYmFzZS5qc29uL1N0b3JpZXMvJHtyZXNvdXJjZX1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQVBJIiwibGV0IE1ENSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gUm90YXRlTGVmdChsVmFsdWUsIGlTaGlmdEJpdHMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAobFZhbHVlIDw8IGlTaGlmdEJpdHMpIHwgKGxWYWx1ZSA+Pj4gKDMyIC0gaVNoaWZ0Qml0cykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBBZGRVbnNpZ25lZChsWCwgbFkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBsWDQsIGxZNCwgbFg4LCBsWTgsIGxSZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBsWDggPSAobFggJiAweDgwMDAwMDAwKTtcclxuICAgICAgICAgICAgICAgIGxZOCA9IChsWSAmIDB4ODAwMDAwMDApO1xyXG4gICAgICAgICAgICAgICAgbFg0ID0gKGxYICYgMHg0MDAwMDAwMCk7XHJcbiAgICAgICAgICAgICAgICBsWTQgPSAobFkgJiAweDQwMDAwMDAwKTtcclxuICAgICAgICAgICAgICAgIGxSZXN1bHQgPSAobFggJiAweDNGRkZGRkZGKSArIChsWSAmIDB4M0ZGRkZGRkYpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxYNCAmIGxZNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGxSZXN1bHQgXiAweDgwMDAwMDAwIF4gbFg4IF4gbFk4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChsWDQgfCBsWTQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxSZXN1bHQgJiAweDQwMDAwMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChsUmVzdWx0IF4gMHhDMDAwMDAwMCBeIGxYOCBeIGxZOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChsUmVzdWx0IF4gMHg0MDAwMDAwMCBeIGxYOCBeIGxZOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAobFJlc3VsdCBeIGxYOCBeIGxZOCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIEYoeCwgeSwgeikgeyByZXR1cm4gKHggJiB5KSB8ICgofngpICYgeik7IH1cclxuICAgICAgICBmdW5jdGlvbiBHKHgsIHksIHopIHsgcmV0dXJuICh4ICYgeikgfCAoeSAmICh+eikpOyB9XHJcbiAgICAgICAgZnVuY3Rpb24gSCh4LCB5LCB6KSB7IHJldHVybiAoeCBeIHkgXiB6KTsgfVxyXG4gICAgICAgIGZ1bmN0aW9uIEkoeCwgeSwgeikgeyByZXR1cm4gKHkgXiAoeCB8ICh+eikpKTsgfVxyXG4gICAgICAgIGZ1bmN0aW9uIEZGKGEsIGIsIGMsIGQsIHgsIHMsIGFjKSB7XHJcbiAgICAgICAgICAgICAgICBhID0gQWRkVW5zaWduZWQoYSwgQWRkVW5zaWduZWQoQWRkVW5zaWduZWQoRihiLCBjLCBkKSwgeCksIGFjKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQWRkVW5zaWduZWQoUm90YXRlTGVmdChhLCBzKSwgYik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmdW5jdGlvbiBHRyhhLCBiLCBjLCBkLCB4LCBzLCBhYykge1xyXG4gICAgICAgICAgICAgICAgYSA9IEFkZFVuc2lnbmVkKGEsIEFkZFVuc2lnbmVkKEFkZFVuc2lnbmVkKEcoYiwgYywgZCksIHgpLCBhYykpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEFkZFVuc2lnbmVkKFJvdGF0ZUxlZnQoYSwgcyksIGIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIEhIKGEsIGIsIGMsIGQsIHgsIHMsIGFjKSB7XHJcbiAgICAgICAgICAgICAgICBhID0gQWRkVW5zaWduZWQoYSwgQWRkVW5zaWduZWQoQWRkVW5zaWduZWQoSChiLCBjLCBkKSwgeCksIGFjKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQWRkVW5zaWduZWQoUm90YXRlTGVmdChhLCBzKSwgYik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gSUkoYSwgYiwgYywgZCwgeCwgcywgYWMpIHtcclxuICAgICAgICAgICAgICAgIGEgPSBBZGRVbnNpZ25lZChhLCBBZGRVbnNpZ25lZChBZGRVbnNpZ25lZChJKGIsIGMsIGQpLCB4KSwgYWMpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBBZGRVbnNpZ25lZChSb3RhdGVMZWZ0KGEsIHMpLCBiKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBDb252ZXJ0VG9Xb3JkQXJyYXkoc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbFdvcmRDb3VudDtcclxuICAgICAgICAgICAgICAgIHZhciBsTWVzc2FnZUxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB2YXIgbE51bWJlck9mV29yZHNfdGVtcDEgPSBsTWVzc2FnZUxlbmd0aCArIDg7XHJcbiAgICAgICAgICAgICAgICB2YXIgbE51bWJlck9mV29yZHNfdGVtcDIgPSAobE51bWJlck9mV29yZHNfdGVtcDEgLSAobE51bWJlck9mV29yZHNfdGVtcDEgJSA2NCkpIC8gNjQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgbE51bWJlck9mV29yZHMgPSAobE51bWJlck9mV29yZHNfdGVtcDIgKyAxKSAqIDE2O1xyXG4gICAgICAgICAgICAgICAgdmFyIGxXb3JkQXJyYXkgPSBBcnJheShsTnVtYmVyT2ZXb3JkcyAtIDEpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxCeXRlUG9zaXRpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxCeXRlQ291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGxCeXRlQ291bnQgPCBsTWVzc2FnZUxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsV29yZENvdW50ID0gKGxCeXRlQ291bnQgLSAobEJ5dGVDb3VudCAlIDQpKSAvIDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxCeXRlUG9zaXRpb24gPSAobEJ5dGVDb3VudCAlIDQpICogODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbFdvcmRBcnJheVtsV29yZENvdW50XSA9IChsV29yZEFycmF5W2xXb3JkQ291bnRdIHwgKHN0cmluZy5jaGFyQ29kZUF0KGxCeXRlQ291bnQpIDw8IGxCeXRlUG9zaXRpb24pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbEJ5dGVDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbFdvcmRDb3VudCA9IChsQnl0ZUNvdW50IC0gKGxCeXRlQ291bnQgJSA0KSkgLyA0O1xyXG4gICAgICAgICAgICAgICAgbEJ5dGVQb3NpdGlvbiA9IChsQnl0ZUNvdW50ICUgNCkgKiA4O1xyXG4gICAgICAgICAgICAgICAgbFdvcmRBcnJheVtsV29yZENvdW50XSA9IGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gfCAoMHg4MCA8PCBsQnl0ZVBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGxXb3JkQXJyYXlbbE51bWJlck9mV29yZHMgLSAyXSA9IGxNZXNzYWdlTGVuZ3RoIDw8IDM7XHJcbiAgICAgICAgICAgICAgICBsV29yZEFycmF5W2xOdW1iZXJPZldvcmRzIC0gMV0gPSBsTWVzc2FnZUxlbmd0aCA+Pj4gMjk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbFdvcmRBcnJheTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBXb3JkVG9IZXgobFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgV29yZFRvSGV4VmFsdWUgPSBcIlwiLCBXb3JkVG9IZXhWYWx1ZV90ZW1wID0gXCJcIiwgbEJ5dGUsIGxDb3VudDtcclxuICAgICAgICAgICAgICAgIGZvciAobENvdW50ID0gMDsgbENvdW50IDw9IDM7IGxDb3VudCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxCeXRlID0gKGxWYWx1ZSA+Pj4gKGxDb3VudCAqIDgpKSAmIDI1NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgV29yZFRvSGV4VmFsdWVfdGVtcCA9IFwiMFwiICsgbEJ5dGUudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBXb3JkVG9IZXhWYWx1ZSA9IFdvcmRUb0hleFZhbHVlICsgV29yZFRvSGV4VmFsdWVfdGVtcC5zdWJzdHIoV29yZFRvSGV4VmFsdWVfdGVtcC5sZW5ndGggLSAyLCAyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBXb3JkVG9IZXhWYWx1ZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBVdGY4RW5jb2RlKHN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xcclxcbi9nLCBcIlxcblwiKTtcclxuICAgICAgICAgICAgICAgIHZhciB1dGZ0ZXh0ID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHN0cmluZy5sZW5ndGg7IG4rKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBzdHJpbmcuY2hhckNvZGVBdChuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjIDwgMTI4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChjID4gMTI3KSAmJiAoYyA8IDIwNDgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjID4+IDYpIHwgMTkyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgJiA2MykgfCAxMjgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyA+PiAxMikgfCAyMjQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgPj4gNikgJiA2MykgfCAxMjgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDYzKSB8IDEyOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHV0ZnRleHQ7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHggPSBBcnJheSgpO1xyXG4gICAgICAgIHZhciBrLCBBQSwgQkIsIENDLCBERCwgYSwgYiwgYywgZDtcclxuICAgICAgICB2YXIgUzExID0gNywgUzEyID0gMTIsIFMxMyA9IDE3LCBTMTQgPSAyMjtcclxuICAgICAgICB2YXIgUzIxID0gNSwgUzIyID0gOSwgUzIzID0gMTQsIFMyNCA9IDIwO1xyXG4gICAgICAgIHZhciBTMzEgPSA0LCBTMzIgPSAxMSwgUzMzID0gMTYsIFMzNCA9IDIzO1xyXG4gICAgICAgIHZhciBTNDEgPSA2LCBTNDIgPSAxMCwgUzQzID0gMTUsIFM0NCA9IDIxO1xyXG5cclxuICAgICAgICBzdHJpbmcgPSBVdGY4RW5jb2RlKHN0cmluZyk7XHJcblxyXG4gICAgICAgIHggPSBDb252ZXJ0VG9Xb3JkQXJyYXkoc3RyaW5nKTtcclxuXHJcbiAgICAgICAgYSA9IDB4Njc0NTIzMDE7IGIgPSAweEVGQ0RBQjg5OyBjID0gMHg5OEJBRENGRTsgZCA9IDB4MTAzMjU0NzY7XHJcblxyXG4gICAgICAgIGZvciAoayA9IDA7IGsgPCB4Lmxlbmd0aDsgayArPSAxNikge1xyXG4gICAgICAgICAgICAgICAgQUEgPSBhOyBCQiA9IGI7IENDID0gYzsgREQgPSBkO1xyXG4gICAgICAgICAgICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIHhbayArIDBdLCBTMTEsIDB4RDc2QUE0NzgpO1xyXG4gICAgICAgICAgICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIHhbayArIDFdLCBTMTIsIDB4RThDN0I3NTYpO1xyXG4gICAgICAgICAgICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIHhbayArIDJdLCBTMTMsIDB4MjQyMDcwREIpO1xyXG4gICAgICAgICAgICAgICAgYiA9IEZGKGIsIGMsIGQsIGEsIHhbayArIDNdLCBTMTQsIDB4QzFCRENFRUUpO1xyXG4gICAgICAgICAgICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIHhbayArIDRdLCBTMTEsIDB4RjU3QzBGQUYpO1xyXG4gICAgICAgICAgICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIHhbayArIDVdLCBTMTIsIDB4NDc4N0M2MkEpO1xyXG4gICAgICAgICAgICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIHhbayArIDZdLCBTMTMsIDB4QTgzMDQ2MTMpO1xyXG4gICAgICAgICAgICAgICAgYiA9IEZGKGIsIGMsIGQsIGEsIHhbayArIDddLCBTMTQsIDB4RkQ0Njk1MDEpO1xyXG4gICAgICAgICAgICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIHhbayArIDhdLCBTMTEsIDB4Njk4MDk4RDgpO1xyXG4gICAgICAgICAgICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIHhbayArIDldLCBTMTIsIDB4OEI0NEY3QUYpO1xyXG4gICAgICAgICAgICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIHhbayArIDEwXSwgUzEzLCAweEZGRkY1QkIxKTtcclxuICAgICAgICAgICAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCB4W2sgKyAxMV0sIFMxNCwgMHg4OTVDRDdCRSk7XHJcbiAgICAgICAgICAgICAgICBhID0gRkYoYSwgYiwgYywgZCwgeFtrICsgMTJdLCBTMTEsIDB4NkI5MDExMjIpO1xyXG4gICAgICAgICAgICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIHhbayArIDEzXSwgUzEyLCAweEZEOTg3MTkzKTtcclxuICAgICAgICAgICAgICAgIGMgPSBGRihjLCBkLCBhLCBiLCB4W2sgKyAxNF0sIFMxMywgMHhBNjc5NDM4RSk7XHJcbiAgICAgICAgICAgICAgICBiID0gRkYoYiwgYywgZCwgYSwgeFtrICsgMTVdLCBTMTQsIDB4NDlCNDA4MjEpO1xyXG4gICAgICAgICAgICAgICAgYSA9IEdHKGEsIGIsIGMsIGQsIHhbayArIDFdLCBTMjEsIDB4RjYxRTI1NjIpO1xyXG4gICAgICAgICAgICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIHhbayArIDZdLCBTMjIsIDB4QzA0MEIzNDApO1xyXG4gICAgICAgICAgICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIHhbayArIDExXSwgUzIzLCAweDI2NUU1QTUxKTtcclxuICAgICAgICAgICAgICAgIGIgPSBHRyhiLCBjLCBkLCBhLCB4W2sgKyAwXSwgUzI0LCAweEU5QjZDN0FBKTtcclxuICAgICAgICAgICAgICAgIGEgPSBHRyhhLCBiLCBjLCBkLCB4W2sgKyA1XSwgUzIxLCAweEQ2MkYxMDVEKTtcclxuICAgICAgICAgICAgICAgIGQgPSBHRyhkLCBhLCBiLCBjLCB4W2sgKyAxMF0sIFMyMiwgMHgyNDQxNDUzKTtcclxuICAgICAgICAgICAgICAgIGMgPSBHRyhjLCBkLCBhLCBiLCB4W2sgKyAxNV0sIFMyMywgMHhEOEExRTY4MSk7XHJcbiAgICAgICAgICAgICAgICBiID0gR0coYiwgYywgZCwgYSwgeFtrICsgNF0sIFMyNCwgMHhFN0QzRkJDOCk7XHJcbiAgICAgICAgICAgICAgICBhID0gR0coYSwgYiwgYywgZCwgeFtrICsgOV0sIFMyMSwgMHgyMUUxQ0RFNik7XHJcbiAgICAgICAgICAgICAgICBkID0gR0coZCwgYSwgYiwgYywgeFtrICsgMTRdLCBTMjIsIDB4QzMzNzA3RDYpO1xyXG4gICAgICAgICAgICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIHhbayArIDNdLCBTMjMsIDB4RjRENTBEODcpO1xyXG4gICAgICAgICAgICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIHhbayArIDhdLCBTMjQsIDB4NDU1QTE0RUQpO1xyXG4gICAgICAgICAgICAgICAgYSA9IEdHKGEsIGIsIGMsIGQsIHhbayArIDEzXSwgUzIxLCAweEE5RTNFOTA1KTtcclxuICAgICAgICAgICAgICAgIGQgPSBHRyhkLCBhLCBiLCBjLCB4W2sgKyAyXSwgUzIyLCAweEZDRUZBM0Y4KTtcclxuICAgICAgICAgICAgICAgIGMgPSBHRyhjLCBkLCBhLCBiLCB4W2sgKyA3XSwgUzIzLCAweDY3NkYwMkQ5KTtcclxuICAgICAgICAgICAgICAgIGIgPSBHRyhiLCBjLCBkLCBhLCB4W2sgKyAxMl0sIFMyNCwgMHg4RDJBNEM4QSk7XHJcbiAgICAgICAgICAgICAgICBhID0gSEgoYSwgYiwgYywgZCwgeFtrICsgNV0sIFMzMSwgMHhGRkZBMzk0Mik7XHJcbiAgICAgICAgICAgICAgICBkID0gSEgoZCwgYSwgYiwgYywgeFtrICsgOF0sIFMzMiwgMHg4NzcxRjY4MSk7XHJcbiAgICAgICAgICAgICAgICBjID0gSEgoYywgZCwgYSwgYiwgeFtrICsgMTFdLCBTMzMsIDB4NkQ5RDYxMjIpO1xyXG4gICAgICAgICAgICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIHhbayArIDE0XSwgUzM0LCAweEZERTUzODBDKTtcclxuICAgICAgICAgICAgICAgIGEgPSBISChhLCBiLCBjLCBkLCB4W2sgKyAxXSwgUzMxLCAweEE0QkVFQTQ0KTtcclxuICAgICAgICAgICAgICAgIGQgPSBISChkLCBhLCBiLCBjLCB4W2sgKyA0XSwgUzMyLCAweDRCREVDRkE5KTtcclxuICAgICAgICAgICAgICAgIGMgPSBISChjLCBkLCBhLCBiLCB4W2sgKyA3XSwgUzMzLCAweEY2QkI0QjYwKTtcclxuICAgICAgICAgICAgICAgIGIgPSBISChiLCBjLCBkLCBhLCB4W2sgKyAxMF0sIFMzNCwgMHhCRUJGQkM3MCk7XHJcbiAgICAgICAgICAgICAgICBhID0gSEgoYSwgYiwgYywgZCwgeFtrICsgMTNdLCBTMzEsIDB4Mjg5QjdFQzYpO1xyXG4gICAgICAgICAgICAgICAgZCA9IEhIKGQsIGEsIGIsIGMsIHhbayArIDBdLCBTMzIsIDB4RUFBMTI3RkEpO1xyXG4gICAgICAgICAgICAgICAgYyA9IEhIKGMsIGQsIGEsIGIsIHhbayArIDNdLCBTMzMsIDB4RDRFRjMwODUpO1xyXG4gICAgICAgICAgICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIHhbayArIDZdLCBTMzQsIDB4NDg4MUQwNSk7XHJcbiAgICAgICAgICAgICAgICBhID0gSEgoYSwgYiwgYywgZCwgeFtrICsgOV0sIFMzMSwgMHhEOUQ0RDAzOSk7XHJcbiAgICAgICAgICAgICAgICBkID0gSEgoZCwgYSwgYiwgYywgeFtrICsgMTJdLCBTMzIsIDB4RTZEQjk5RTUpO1xyXG4gICAgICAgICAgICAgICAgYyA9IEhIKGMsIGQsIGEsIGIsIHhbayArIDE1XSwgUzMzLCAweDFGQTI3Q0Y4KTtcclxuICAgICAgICAgICAgICAgIGIgPSBISChiLCBjLCBkLCBhLCB4W2sgKyAyXSwgUzM0LCAweEM0QUM1NjY1KTtcclxuICAgICAgICAgICAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCB4W2sgKyAwXSwgUzQxLCAweEY0MjkyMjQ0KTtcclxuICAgICAgICAgICAgICAgIGQgPSBJSShkLCBhLCBiLCBjLCB4W2sgKyA3XSwgUzQyLCAweDQzMkFGRjk3KTtcclxuICAgICAgICAgICAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCB4W2sgKyAxNF0sIFM0MywgMHhBQjk0MjNBNyk7XHJcbiAgICAgICAgICAgICAgICBiID0gSUkoYiwgYywgZCwgYSwgeFtrICsgNV0sIFM0NCwgMHhGQzkzQTAzOSk7XHJcbiAgICAgICAgICAgICAgICBhID0gSUkoYSwgYiwgYywgZCwgeFtrICsgMTJdLCBTNDEsIDB4NjU1QjU5QzMpO1xyXG4gICAgICAgICAgICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIHhbayArIDNdLCBTNDIsIDB4OEYwQ0NDOTIpO1xyXG4gICAgICAgICAgICAgICAgYyA9IElJKGMsIGQsIGEsIGIsIHhbayArIDEwXSwgUzQzLCAweEZGRUZGNDdEKTtcclxuICAgICAgICAgICAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCB4W2sgKyAxXSwgUzQ0LCAweDg1ODQ1REQxKTtcclxuICAgICAgICAgICAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCB4W2sgKyA4XSwgUzQxLCAweDZGQTg3RTRGKTtcclxuICAgICAgICAgICAgICAgIGQgPSBJSShkLCBhLCBiLCBjLCB4W2sgKyAxNV0sIFM0MiwgMHhGRTJDRTZFMCk7XHJcbiAgICAgICAgICAgICAgICBjID0gSUkoYywgZCwgYSwgYiwgeFtrICsgNl0sIFM0MywgMHhBMzAxNDMxNCk7XHJcbiAgICAgICAgICAgICAgICBiID0gSUkoYiwgYywgZCwgYSwgeFtrICsgMTNdLCBTNDQsIDB4NEUwODExQTEpO1xyXG4gICAgICAgICAgICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIHhbayArIDRdLCBTNDEsIDB4Rjc1MzdFODIpO1xyXG4gICAgICAgICAgICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIHhbayArIDExXSwgUzQyLCAweEJEM0FGMjM1KTtcclxuICAgICAgICAgICAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCB4W2sgKyAyXSwgUzQzLCAweDJBRDdEMkJCKTtcclxuICAgICAgICAgICAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCB4W2sgKyA5XSwgUzQ0LCAweEVCODZEMzkxKTtcclxuICAgICAgICAgICAgICAgIGEgPSBBZGRVbnNpZ25lZChhLCBBQSk7XHJcbiAgICAgICAgICAgICAgICBiID0gQWRkVW5zaWduZWQoYiwgQkIpO1xyXG4gICAgICAgICAgICAgICAgYyA9IEFkZFVuc2lnbmVkKGMsIENDKTtcclxuICAgICAgICAgICAgICAgIGQgPSBBZGRVbnNpZ25lZChkLCBERCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdGVtcCA9IFdvcmRUb0hleChhKSArIFdvcmRUb0hleChiKSArIFdvcmRUb0hleChjKSArIFdvcmRUb0hleChkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRlbXAudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTUQ1IiwiaW1wb3J0IEFQSSBmcm9tIFwiLi9hcGlcIlxyXG5pbXBvcnQgdXNlcnBhZ2UgZnJvbSBcIi4vc3BlY2lmaWNwYWdlXCJcclxuaW1wb3J0IE1ENSBmcm9tIFwiLi9oYXNoXCJcclxuaW1wb3J0IHJlZ2lzdHJhdGlvbkZvcm0gZnJvbSBcIi4vcmVnaXN0ZXJcIlxyXG5cclxuY29uc3QgdXNlck5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTsgLy8gY3JlYXRlcyBhbiBpbnB1dCBmaWVsZCBmb3IgdXNlcm5hbWVcclxuY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTsvLyBjcmVhdGVzIGFuIGlucHV0IGZpZWxkIGZvciBwYXNzd29yZFxyXG5jb25zdCByZWdpc3RyYXRpb25QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRfX3JlZ2lzdHJhdGlvblwiKSAvLyBncmFicyBhIGNsYXNzIG9uIHRoZSBkb21cclxuY29uc3QgbG9naW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRfX2xvZ2luXCIpOyAvLyBncmFicyBhIGNsYXNzIG9uIHRoZSBkb21cclxucmVnaXN0cmF0aW9uUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IC8vIGNoYW5nZXMgdGhlICBkaXNwbGF5IHN0eWxlIG9mIHRoZSBlbGVtZW50IHRvIG5vbmVcclxuXHJcbmNvbnN0IGxvZ2luID0ge1xyXG4gICAgY3JlYXRlQW5kQXBwZW5kTG9naW5JbnB1dCgpIHtcclxuICAgICAgICAvLyBjcmVhdGVzIGFuIGgzIHRhZyB0byB1c2UgYXMgdGhlIGhlYWRlclxyXG4gICAgICAgIGNvbnN0IExvZ2luSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXHJcbiAgICAgICAgLy8gYWRkcyB0ZXh0IHRvIHRoZSBoMyB0YWdcclxuICAgICAgICBMb2dpbkhlYWRlci50ZXh0Q29udGVudCA9IFwiV2VsY29tZSBUbyBQLkkuUFwiXHJcbiAgICAgICAgLy8gc2V0IHRoZSB0eXBlIG9mIHRoZSB1c2VybmFtZSBpbnB1dCBmaWVsZCB0byB0ZXh0XHJcbiAgICAgICAgdXNlck5hbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgLy8gYWRkcyBhIHBsYWNlIGhvbGRlciBvZiB0ZXh0IGZvciB0aGUgdXNlciBzbyB0aGV5IGNhbiBzZWUgYW4gZXhhbXBsZSBvZiB3aGF0IHRvIHR5cGUgaW5cclxuICAgICAgICB1c2VyTmFtZUlucHV0LnBsYWNlaG9sZGVyID0gXCJ1c2VybmFtZVwiO1xyXG4gICAgICAgIC8vIHNldHMgdGhlIHR5cGUgb2YgaW5wdXQgdG8gcGFzc3dvcmQgdGh1c2x5IG9iZmlzY2F0aW5nIHRoZSBwYXNzd29yZCBmcm9tIHZpZXdcclxuICAgICAgICBwYXNzd29yZElucHV0LnR5cGUgPSBcInBhc3N3b3JkXCI7XHJcbiAgICAgICAgLy8gYWRkcyBhIHBsYWNlIGhvbGRlciBvZiB0ZXh0IGZvciB0aGUgdXNlciBzbyB0aGV5IGNhbiBzZWUgYW4gZXhhbXBsZSBvZiB3aGF0IHRvIHR5cGUgaW5cclxuICAgICAgICBwYXNzd29yZElucHV0LnBsYWNlaG9sZGVyID0gXCJwYXNzd29yZFwiO1xyXG4gICAgICAgIC8vIGFwcGVuZHMgaXRlbSB0byBsb2dpbnBhZ2Ugd2ljaCBpcyBhIGNsYXNzIG9uIHRoZSBkb21cclxuICAgICAgICBsb2dpblBhZ2UuYXBwZW5kQ2hpbGQoTG9naW5IZWFkZXIpXHJcbiAgICAgICAgLy8gYXBwZW5kcyBpdGVtIHRvIGxvZ2lucGFnZSB3aWNoIGlzIGEgY2xhc3Mgb24gdGhlIGRvbVxyXG4gICAgICAgIGxvZ2luUGFnZS5hcHBlbmRDaGlsZCh1c2VyTmFtZUlucHV0KTtcclxuICAgICAgICAvLyBhcHBlbmRzIGl0ZW0gdG8gbG9naW5wYWdlIHdpY2ggaXMgYSBjbGFzcyBvbiB0aGUgZG9tXHJcbiAgICAgICAgbG9naW5QYWdlLmFwcGVuZENoaWxkKHBhc3N3b3JkSW5wdXQpO1xyXG4gICAgICAgIC8vY3JlYXRlcyBhIGJ1dHRvbiBmb3IgbG9naW5cclxuICAgICAgICBjb25zdCBsb2dpbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgLy8gYWRkcyB0ZXh0IHRvIHRoZSBidXR0b24gZm9yIGxvZ2luXHJcbiAgICAgICAgbG9naW5CdXR0b24udGV4dENvbnRlbnQgPSAoXCJsb2dpblwiKTtcclxuICAgICAgICAvL2NyZWF0ZXMgYSBidXR0b24gZm9yIHJlZ2lzdGVyXHJcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIC8vIGFkZHMgdGV4dCB0byB0aGUgYnV0dG9uIGZvciByZWdpc3RlclxyXG4gICAgICAgIHJlZ2lzdGVyQnV0dG9uLnRleHRDb250ZW50ID0gKFwicmVnaXN0ZXJcIik7XHJcbiAgICAgICAgLy8gYXBwZW5kcyBpdGVtIHRvIGxvZ2lucGFnZSB3aWNoIGlzIGEgY2xhc3Mgb24gdGhlIGRvbVxyXG4gICAgICAgIGxvZ2luUGFnZS5hcHBlbmRDaGlsZChsb2dpbkJ1dHRvbik7XHJcbiAgICAgICAgLy8gYXBwZW5kcyBpdGVtIHRvIGxvZ2lucGFnZSB3aWNoIGlzIGEgY2xhc3Mgb24gdGhlIGRvbVxyXG4gICAgICAgIGxvZ2luUGFnZS5hcHBlbmRDaGlsZChyZWdpc3RlckJ1dHRvbik7XHJcbiAgICAgICAgLy8gIGV2ZW50IGxpc3RpbmVyIHRoYXQgZGlyZWN0bHkgbGVhZHMgdG8gYSBmdW5jdGlvblxyXG4gICAgICAgIGxvZ2luQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmdldFVzZXJEYXRhKTtcclxuICAgICAgICAvLyAgZXZlbnQgbGlzdGluZXIgdGhhdCBkaXJlY3RseSBsZWFkcyB0byBhIGZ1bmN0aW9uXHJcbiAgICAgICAgcmVnaXN0ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMucmVwbGFjZVdpdGhSZWdpc3RyYXRpb25Gb3JtKTtcclxuICAgIH0sICAvL2Z1bmN0aW9uIGNhbGxlZCBvbiBjbGljayBldmVudCBsb2dpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIlxyXG4gICAgZ2V0VXNlckRhdGEoKSB7XHJcbiAgICAgICAgLy8gc2V0cyBhIHZhcmlhYmxlIHRvIHRoZSB2YWx1ZSBvZiB0aGUgdXNlcm5hbWUgaW5wdXQgZmllbGRcclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9IHVzZXJOYW1lSW5wdXQudmFsdWU7XHJcbiAgICAgICAgLy8gc2V0cyBhIHZhcmlhYmxlIHRvIHRoZSB2YWx1ZSBvZiB0aGUgcGFzc3dvcmQgaW5wdXQgZmllbGRcclxuICAgICAgICBjb25zdCBwYXNzd29yZCA9IHBhc3N3b3JkSW5wdXQudmFsdWU7XHJcbiAgICAgICAgLy8gZ3JhYnMgYWxsIHRoZSBkYXRhIGFuZCBwYXNzZXMgaW4gdXNlcnMgYXMgdGhlIHBhcmFtYXRlclxyXG4gICAgICAgIEFQSS5nZXREYXRhKFwidXNlcnNcIilcclxuICAgICAgICAgICAgLy8gb25jZSBpdCBoYXMgYWwgdGhlIHVzZXJzXHJcbiAgICAgICAgICAgIC50aGVuKGFsbFVzZXJzID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHNldCBhIHZhcmlhYmxlIHRvIDFcclxuICAgICAgICAgICAgICAgIGxldCB1c2Vyc1Byb2Nlc3NlZCA9IDE7XHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgZWFjaCB1c2VyXHJcbiAgICAgICAgICAgICAgICBhbGxVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBzZXQgYSB2YXJpYWJsZSBlcXVhbCB0byBhIGhhc2ggb2YgdGhlICB1c2VyIG5hbWUgIGFuZCAgcGFzc3dvcmQgaW4gY29uanVjdGlvbiB3aXRoIHRoZSBNRDUgZnVuY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFzc2hhc2ggPSBNRDUocGFzc3dvcmQgKyBNRDUodXNlcm5hbWUpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVja3MgaWYgdGhlIHVzZXJuYW1lIGFuZCBwYXNzd29yZCBtYXRjaCB3aGF0IGlzIGluIHRoZSBkYXRhYnNlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJuYW1lID09PSB1c2VyLnVzZXJOYW1lICYmIHBhc3NoYXNoID09PSB1c2VyLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGl0IGlzIGl0IHNldHMgdGhlIHVzZXIgaWQgb2YgdGhlIG1hdGNoaW5nIHVzZXIgaWQgaW9udG8gc2Vzc2lvbiBzdG9yYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgdXNlci5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGVuIHNldHMgdGhlIHZhciB1c2VyaWQgdG8gdGhlIHVzZXJpZCBpbiBzZXNzaW9uIHN0b3JhZ2Ugd2UganVzdCBtYWRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoZW4gc2V0cyBzZXNzaW9uIHN0b3JhZ2UgdXNlciBuYW1lIHRvIHRoZSB1c2VybmFtZSBpbiB0aGUgZGF0YWJhc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJOYW1lXCIsIHVzZXIudXNlck5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhlIGxvYWRzIHRoZSBzcGVjaWZpYyB1c2VyIHBhZ2UgYmFzZWQgb24gdGhlIHVzZXIgaWQgcGFyYW1hdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRVc2VyU3BlY2lmaWNQYWdlKHVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrcyB0byBzZWUgaWYgdGhlIHZhcmlhYmxlIHVzZXJlcyBwcm9jY2VzZWQgd2ljaCBzdGFydHMgYXQgMSBjdXJlbnRsIGVxdWFscyB0aGUgbGVudGdoIG9mIHRoZSBhbGwgdXNlcnMgaWYgaXQgZG9lc250IHRoZW5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHVzZXJzUHJvY2Vzc2VkID09PSBhbGxVc2Vycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJVc2VybmFtZS9wYXNzd29yZCBpbnZhbGlkLiBJZiBuZXcgdXNlciwgcGxlYXNlIHJlZ2lzdGVyLlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYXNzd29yZClcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpdCBwcm9jZWRlZHMgdG8gaW5jcmltZW50ZSB1bnRpbCBvbmUgb2YgdGhlIGFib3ZlIDIgaWYgZWxzZSBvciBpZiBzdGF0bWVudHMgYXJlIG1hdGNoZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnNQcm9jZXNzZWQrK1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gbG9hZFVzZXJTcGVjaWZpY1BhZ2UoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcnVucyB0aGUgdXNlciBzcGVjaWZpYyBmdW5jdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VycGFnZS5zcGVjaWZpY3VzZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgfSxcclxuICAgIHJlcGxhY2VXaXRoUmVnaXN0cmF0aW9uRm9ybSgpIHtcclxuICAgICAgICAvL2dyYWJzIHRoZSAgY2xhc3Mgb24gdGhlIGRvbVxyXG4gICAgICAgIGNvbnN0IHJlZ2lzdHJhdGlvblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dF9fcmVnaXN0cmF0aW9uXCIpXHJcbiAgICAgICAgLy9zZXRzIHRoZSBlbGVtZW50J3MgaW5uZXIgaHRtbCB0byBhbiBlbXB0eSBzdHJpbmdcclxuICAgICAgICByZWdpc3RyYXRpb25QYWdlLmlubmVySFRNTCA9IFwiIFwiXHJcbiAgICAgICAgLy90aGVuIHJ1bnMgdGhlIGNyZWF0ZSByZWdlc3RyYXRpb24gZm9ybSBmdW5jdGlvblxyXG4gICAgICAgIHJlZ2lzdHJhdGlvbkZvcm0uY3JlYXRlQW5kQXBwZW5kUmVnaXN0cmF0aW9uRm9ybSgpXHJcbiAgICAgICAgLy9zZXRzIHRoZSBkaXNwbGF5IHN0eWxlIG9mIHRoZSByZWcgZm9ybSB0byBibG9ja1xyXG4gICAgICAgIHJlZ2lzdHJhdGlvblBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAvL2dyYWJzIHRoZSAgY2xhc3Mgb24gdGhlIGRvbVxyXG4gICAgICAgIGNvbnN0IGxvZ2luUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0X19sb2dpblwiKTtcclxuICAgICAgICAvL3NldHMgdGhlIGRpc3BsYXkgc3R5bGUgb2YgdGhlIGxvZ2luIGZvcm0gdG8gbm9uZVxyXG4gICAgICAgIGxvZ2luUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gICAgfSxcclxuICAgIHJlcGxhY2VXaXRoTG9naW5Gb3JtKCkge1xyXG4gICAgICAgIC8vZ3JhYnMgdGhlICBjbGFzcyBvbiB0aGUgZG9tXHJcbiAgICAgICAgY29uc3QgbG9naW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRfX2xvZ2luXCIpO1xyXG4gICAgICAgIC8vIHNldHMgdGhlIGlubmVyIGh0bWwgb2YgdGhlIGVsZW1lbnQgdG8gYW4gZW1wdHkgc3RyaW5nXHJcbiAgICAgICAgbG9naW5QYWdlLmlubmVySFRNTCA9IFwiIFwiXHJcbiAgICAgICAgLy8gY3JlYXRlcyB0aGUgbG9naW4gZm9ybVxyXG4gICAgICAgIGxvZ2luLmNyZWF0ZUFuZEFwcGVuZExvZ2luSW5wdXQoKVxyXG4gICAgICAgIC8vZ3JhYnMgdGhlICBjbGFzcyBvbiB0aGUgZG9tXHJcbiAgICAgICAgY29uc3QgcmVnaXN0cmF0aW9uUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0X19yZWdpc3RyYXRpb25cIilcclxuXHJcbiAgICAgICAgLy9zZXRzIHRoZSBkaXNwbGF5IHN0eWxlIG9mIHRoZSBsb2dpbiBmb3JtIHRvIEJsb2NrXHJcbiAgICAgICAgbG9naW5QYWdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgLy9zZXRzIHRoZSBkaXNwbGF5IHN0eWxlIG9mIHRoZSByZWcgZm9ybSB0byBOb25lXHJcbiAgICAgICAgcmVnaXN0cmF0aW9uUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgLy9ncmFicyB0aGUgIGNsYXNzIG9uIHRoZSBkb21cclxuICAgICAgICBjb25zdCBTdG9yeTQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlN0b3J5NFwiKVxyXG4gICAgICAgIC8vZ3JhYnMgdGhlICBjbGFzcyBvbiB0aGUgZG9tXHJcbiAgICAgICAgY29uc3QgSGVhZGVyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyMlwiKVxyXG4gICAgICAgIC8vZ3JhYnMgdGhlICBjbGFzcyBvbiB0aGUgZG9tXHJcbiAgICAgICAgY29uc3QgbG9nb3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRfX2xvZ291dFwiKVxyXG4gICAgICAgIC8vZ3JhYnMgdGhlICBjbGFzcyBvbiB0aGUgZG9tXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdG9yaWVzXCIpLmlubmVySFRNTCA9IFwiIFwiXHJcbiAgICAgICAgLy9zZXRzIHRoZSBkaXNwbGF5IHN0eWxlIG9mIHRoZSBlbGVtZW50ICB0byBOb25lXHJcbiAgICAgICAgU3Rvcnk0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAvL3NldHMgdGhlIGRpc3BsYXkgc3R5bGUgb2YgdGhlIGVsZW1lbnQgIHRvIE5vbmVcclxuICAgICAgICBIZWFkZXIyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAvL3NldHMgdGhlIGRpc3BsYXkgc3R5bGUgb2YgdGhlIGVsZW1lbnQgIHRvIE5vbmVcclxuICAgICAgICBsb2dvdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSxcclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9naW4iLCJcclxuaW1wb3J0IGxvZ2luIGZyb20gXCIuL2xvZ2luXCJcclxuY29uc3QgbG9nb3V0ID0ge1xyXG5cclxuICBjcmVhdGVBbmRBcHBlbmRMb2dvdXQoKSB7XHJcblxyXG4gICAgY29uc3Qgb3V0cHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0X19sb2dvdXRcIik7XHJcblxyXG4gICAgbGV0IGxvZ291dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgIGxvZ291dEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTG9nIE91dFwiXHJcbiAgICBsb2dvdXRCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsb2dvdXRcIilcclxuXHJcbiAgICBsb2dvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlTG9nb3V0KVxyXG4gICAgb3V0cHV0RWxlbWVudC5hcHBlbmRDaGlsZChsb2dvdXRCdXR0b24pO1xyXG4gIH0sXHJcblxyXG4gIGhhbmRsZUxvZ291dCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyMTIzXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Rvcmllc1wiKS5pbm5lckhUTUwgPSBcIiBcIlxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdG9yaWVzXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgbG9naW4ucmVwbGFjZVdpdGhMb2dpbkZvcm0oKVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ291dCIsImltcG9ydCBsb2dpbiBmcm9tIFwiLi9sb2dpblwiXHJcbmltcG9ydCB1c2VycGFnZSBmcm9tIFwiLi9zcGVjaWZpY3BhZ2VcIlxyXG5pZiAoc2Vzc2lvblN0b3JhZ2UudXNlcklkID09PSB1bmRlZmluZWQpIHtcclxuICBsb2dpbi5jcmVhdGVBbmRBcHBlbmRMb2dpbklucHV0KCk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXIxMjNcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Rvcmllc1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRfX2xvZ291dFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn1cclxuaWYgKHNlc3Npb25TdG9yYWdlLnVzZXJJZCA+PSAxKSB7XHJcbiAgdXNlcnBhZ2Uuc3BlY2lmaWN1c2VyKClcclxufVxyXG4iLCJpbXBvcnQgQVBJIGZyb20gXCIuL2FwaVwiXHJcbmltcG9ydCBsb2dpbiBmcm9tIFwiLi9sb2dpblwiXHJcbmltcG9ydCBNRDUgZnJvbSBcIi4vaGFzaFwiXHJcbmNvbnN0IHVzZXJOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuY29uc3QgdXNlclBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuY29uc3QgdXNlckVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuXHJcbmNvbnN0IGNyZWF0ZU5ld1VzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbmNvbnN0IGJhY2tidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcblxyXG5jb25zdCByZWdpc3RyYXRpb25Gb3JtID0ge1xyXG5cclxuICAgIGNyZWF0ZUFuZEFwcGVuZFJlZ2lzdHJhdGlvbkZvcm0oKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRfX3JlZ2lzdHJhdGlvblwiKVxyXG4gICAgICAgIGNvbnN0IHJlZ2lzdGVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXHJcbiAgICAgICAgcmVnaXN0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocmVnaXN0ZXJIZWFkZXIpXHJcbiAgICAgICAgcmVnaXN0ZXJIZWFkZXIudGV4dENvbnRlbnQgPSBcIlJlZ2lzdGVyIFVzZXJcIlxyXG5cclxuXHJcblxyXG4gICAgICAgIHVzZXJOYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiXHJcbiAgICAgICAgdXNlclBhc3N3b3JkSW5wdXQudHlwZSA9IFwicGFzc3dvcmRcIlxyXG4gICAgICAgIHVzZXJFbWFpbElucHV0LnR5cGUgPSBcImVtYWlsXCJcclxuXHJcblxyXG4gICAgICAgIHVzZXJOYW1lSW5wdXQucGxhY2Vob2xkZXIgPSBcIklucHV0IFVzZXJOYW1lXCJcclxuICAgICAgICB1c2VyUGFzc3dvcmRJbnB1dC5wbGFjZWhvbGRlciA9IFwiQ3JlYXRlIFBhc3N3b3JkXCJcclxuICAgICAgICB1c2VyRW1haWxJbnB1dC5wbGFjZWhvbGRlciA9IFwiSW5wdXQgRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgY3JlYXRlTmV3VXNlci50ZXh0Q29udGVudCA9IFwiUmVnaXN0ZXIgVXNlclwiXHJcbiAgICAgICAgYmFja2J1dHRvbi50ZXh0Q29udGVudCA9IFwiQmFjayBUbyBMb2dpblwiXHJcblxyXG5cclxuICAgICAgICByZWdpc3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh1c2VyTmFtZUlucHV0KVxyXG4gICAgICAgIHJlZ2lzdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHVzZXJQYXNzd29yZElucHV0KVxyXG4gICAgICAgIHJlZ2lzdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHVzZXJFbWFpbElucHV0KVxyXG4gICAgICAgIHJlZ2lzdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU5ld1VzZXIpXHJcbiAgICAgICAgcmVnaXN0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFja2J1dHRvbilcclxuXHJcbiAgICAgICAgY3JlYXRlTmV3VXNlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5mb3JtdmFsaWRhdGlvbilcclxuICAgICAgICBiYWNrYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLkdvQmFjaylcclxuICAgIH0sXHJcblxyXG5cclxuICAgIGZvcm12YWxpZGF0aW9uKCkge1xyXG4gICAgICAgIGlmICh1c2VyTmFtZUlucHV0LnZhbHVlLmxlbmd0aCA9PSAwIHx8IHVzZXJQYXNzd29yZElucHV0LnZhbHVlLmxlbmd0aCA9PSAwIHx8IHVzZXJFbWFpbElucHV0LnZhbHVlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiTm8gU3RvcnkhXCIpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgKHVzZXJOYW1lSW5wdXQudmFsdWUubGVuZ3RoID4gMCB8fCB1c2VyUGFzc3dvcmRJbnB1dC52YWx1ZS5sZW5ndGggPiAwIHx8IHVzZXJFbWFpbElucHV0LnZhbHVlLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHJlZ2lzdHJhdGlvbkZvcm0ucmVnaXN0ZXJVc2VyKClcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVnaXN0ZXJVc2VyKCkge1xyXG5cclxuICAgICAgICBjb25zdCB1c2VyTmFtZVZhbHVlID0gdXNlck5hbWVJbnB1dC52YWx1ZTtcclxuICAgICAgICBjb25zdCB1c2VyUGFzc3dvcmRWYWx1ZSA9IHVzZXJQYXNzd29yZElucHV0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHVzZXJFbWFpbFZhbHVlID0gdXNlckVtYWlsSW5wdXQudmFsdWU7XHJcblxyXG5cclxuICAgICAgICAvL29uY2UgdGhlIHZhbHVlIGlzIGdvdGVuIHRoaXMgZnVuY3Rpb24gaGFzaGVzIGl0IGJlZm9yZSBpdHMgc2F2ZWQgdG8gdGhlIERCXHJcbiAgICAgICAgbGV0IHBhc3NoYXNoID0gTUQ1KHVzZXJQYXNzd29yZFZhbHVlICsgTUQ1KHVzZXJOYW1lVmFsdWUpKTtcclxuXHJcbiAgICAgICAgbGV0IG5ld1VzZXJUb1NhdmUgPSB7XHJcbiAgICAgICAgICAgIHVzZXJOYW1lOiB1c2VyTmFtZVZhbHVlLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogcGFzc2hhc2gsXHJcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyRW1haWxWYWx1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQVBJLnBvc3ROZXdEYXRhKFwidXNlcnNcIiwgbmV3VXNlclRvU2F2ZSlcclxuXHJcbiAgICAgICAgbG9naW4ucmVwbGFjZVdpdGhMb2dpbkZvcm0oKTtcclxuICAgIH0sXHJcbiAgICBHb0JhY2soKSB7XHJcbiAgICAgICAgbG9naW4ucmVwbGFjZVdpdGhMb2dpbkZvcm0oKTtcclxuXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0cmF0aW9uRm9ybVxyXG4iLCJpbXBvcnQgbG9nb3V0IGZyb20gXCIuL2xvZ291dFwiXHJcbmltcG9ydCBTdG9yeWxpc3QyIGZyb20gXCIuL1N0b3J5L1N0b3J5TGlzdC9saXN0aXRvcmF0b3JcIlxyXG5pbXBvcnQgU3RvcnlGb3JtIGZyb20gXCIuL1N0b3J5L1N0b3J5Rm9ybVwiXHJcbmltcG9ydCBzZXJjaGJhciBmcm9tIFwiLi9TdG9yeS9TdG9yeUxpc3Qvc2VhcmNoYmFyXCJcclxubGV0IHVzZXJwYWdlID0ge1xyXG4gICBzcGVjaWZpY3VzZXIoKXtcclxuY29uc3QgU3Rvcnk0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5TdG9yeTRcIilcclxuY29uc3QgU3RvcnkyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5TdG9yeTJcIilcclxuY29uc3QgU3RvcnkzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5TdG9yeTNcIilcclxuY29uc3QgSGVhZGVyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyMlwiKVxyXG5jb25zdCBsb2dvdXQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRfX2xvZ291dFwiKVxyXG5jb25zdCBsb2dpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dF9fbG9naW5cIik7XHJcbmxvZ2luUGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Rvcmllc1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcjEyM1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcblN0b3J5Mi5pbm5lckhUTUwgPSBcIiBcIlxyXG5TdG9yeTMuaW5uZXJIVE1MID0gXCIgXCJcclxuU3RvcnlsaXN0Mi5saXN0U3RvcnkyKClcclxuc2VyY2hiYXIuc2VhcmNoYmFyMigpXHJcblN0b3J5NC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcblN0b3J5Rm9ybS5TdG9yeUZvcm1CdWlsZGVyKClcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5TdG9yeWZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxubGV0IGN1cnJlbnRVc2VybmFtZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VyTmFtZVwiKVxyXG5sZXQgdXNlcmhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyMlwiKVxyXG51c2VyaGVhZGVyLmlubmVySFRNTCA9IFwiV2VsY29tZSBcIiArIGN1cnJlbnRVc2VybmFtZVxyXG5IZWFkZXIyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbmxvZ291dDIuaW5uZXJIVE1MID0gXCIgXCJcclxubG9nb3V0LmNyZWF0ZUFuZEFwcGVuZExvZ291dCgpO1xyXG5sb2dvdXQyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG4vLyB2YXIgZWdnID0gbmV3IEVnZygpO1xyXG4vLyBlZ2cuYWRkQ29kZShcIk0sRSxULEEsTFwiLCBmdW5jdGlvbigpIHtcclxuLy8gICAgIGpRdWVyeShcIiNlZ2dnaWZcIikuZmFkZUluKDUwMCwgZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBqUXVlcnkoXCIjZWdnZ2lmXCIpLmhpZGUoKTsgfSwgNTAwMCk7XHJcbi8vICAgICB9KTtcclxuLy8gICB9KVxyXG4vLyAgIC5hZGRIb29rKGZ1bmN0aW9uKCl7XHJcbi8vICAgbGV0ICBzdHlsZXNoZWV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdHlsZXNoZWV0XCIpXHJcbi8vICAgc3R5bGVzaGVldC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIgLCBcInN0eWxlcy9BbHQuQ1NTXCIpXHJcbi8vIGFsZXJ0KFwiVW5sb2NrZWQgTWV0YWwgTW9kZVwiKVxyXG4vLyAgIH0pLmxpc3RlbigpO1xyXG5cclxuLy8gICB2YXIgZWdnMiA9IG5ldyBFZ2coKTtcclxuLy8gZWdnMi5hZGRDb2RlKFwiUyxFLEFcIiwgZnVuY3Rpb24oKSB7XHJcbi8vICAgICBqUXVlcnkoXCIjZWdnZ2lmMlwiKS5mYWRlSW4oNTAwLCBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGpRdWVyeShcIiNlZ2dnaWYyXCIpLmhpZGUoKTsgfSwgNTAwMCk7XHJcbi8vICAgICB9KTtcclxuLy8gICB9KVxyXG4vLyAgIC5hZGRIb29rKGZ1bmN0aW9uKCl7XHJcbi8vIGFsZXJ0KFwiVW5sb2NrZWQgTW90aW9uIFNpY2sgTW9kZVwiKVxyXG4vLyBsZXQgIHN0eWxlc2hlZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0eWxlc2hlZXRcIilcclxuLy8gc3R5bGVzaGVldC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIgLCBcInN0eWxlcy9tYWluY3Nzcm90YXRlLmNzc1wiKVxyXG4vLyAgIH0pLmxpc3RlbigpO1xyXG5cclxuXHJcbi8vICAgdmFyIGVnZzMgPSBuZXcgRWdnKCk7XHJcbi8vICAgZWdnMy5hZGRDb2RlKFwiVCxBLFIsRCxJLFNcIiwgZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgIGpRdWVyeShcIiNlZ2dnaWYzXCIpLmZhZGVJbig1MDAsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBqUXVlcnkoXCIjZWdnZ2lmM1wiKS5oaWRlKCk7IH0sIDUwMDApO1xyXG4vLyAgICAgICB9KTtcclxuLy8gICAgIH0pXHJcbi8vICAgICAuYWRkSG9vayhmdW5jdGlvbigpe1xyXG4vLyAgIGFsZXJ0KFwiSW0gdGhlIERvY3RvclwiKVxyXG4vLyAgIGxldCAgc3R5bGVzaGVldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3R5bGVzaGVldFwiKVxyXG4vLyAgIHN0eWxlc2hlZXQuc2V0QXR0cmlidXRlKFwiaHJlZlwiICwgXCJzdHlsZXMvbWFpbmNzc3RhcmRpcy5jc3NcIilcclxuLy8gICAgIH0pLmxpc3RlbigpO1xyXG5cclxuICAgLy8gIHZhciBlZ2c0ID0gbmV3IEVnZygpO1xyXG4gICAvLyAgZWdnNC5hZGRDb2RlKFwidXAsdXAsZG93bixkb3duLGxlZnQscmlnaHQsbGVmdCxyaWdodCxiLGFcIiwgZnVuY3Rpb24oKSB7XHJcbiAgIC8vICAgIGpRdWVyeShcIiNlZ2dnaWY0XCIpLmZhZGVJbig1MDAsIGZ1bmN0aW9uKCkge1xyXG4gICAvLyAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGpRdWVyeShcIiNlZ2dnaWY0XCIpLmhpZGUoKTsgfSwgNTAwMCk7XHJcbiAgIC8vICAgICAgfSk7XHJcbiAgIC8vICAgIH0pXHJcbiAgIC8vICAgIC5hZGRIb29rKGZ1bmN0aW9uKCl7XHJcbiAgIC8vICBhbGVydChcIkNvZGUgQWNjZXB0ZWRcIilcclxuICAgLy8gICAgfSkubGlzdGVuKCk7XHJcbiAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCB1c2VycGFnZSJdfQ==
