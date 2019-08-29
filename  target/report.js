$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/resources/OneD.feature");
formatter.feature({
  "name": "To Add Customer By One Dim Map",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Customer Should Provide The Detail",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User Should Launch The Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AddUser.user_Should_Launch_The_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click The Add User",
  "keyword": "And "
});
formatter.match({
  "location": "AddUser.user_Click_The_Add_User()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Give The valid DetailOdMp",
  "rows": [
    {
      "cells": [
        "fname",
        "moahmed"
      ]
    },
    {
      "cells": [
        "lname",
        "raseem"
      ]
    },
    {
      "cells": [
        "email",
        "raseem.moha@gmail.com"
      ]
    },
    {
      "cells": [
        "address",
        "chennai"
      ]
    },
    {
      "cells": [
        "phone",
        "9442932436"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddUser.user_Should_Give_The_valid_DetailOdMp(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate the customer id Showing or not",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUser.i_validate_the_customer_id_Showing_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/resources/ScenOut.feature");
formatter.feature({
  "name": "To Add Customer By Scen Outline",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To Generate A Five Set Of Customer Id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "User Should Launch The Browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User Click The Add User",
  "keyword": "And "
});
formatter.step({
  "name": "User Should Give The valid DetailScO \"\u003cfname\u003e\",\"\u003clname\u003e\",\"\u003cemail\u003e\",\"\u003caddress\u003e\",\"\u003cphone\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I validate the customer id Showing or not",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "address",
        "phone"
      ]
    },
    {
      "cells": [
        "moha",
        "raseem",
        "rcaseem.moha@gmail.com",
        "chencnai",
        "94425932436"
      ]
    },
    {
      "cells": [
        "krishn",
        "kuma",
        "krcish@gmail.com",
        "tricchy",
        "09876554321"
      ]
    },
    {
      "cells": [
        "jaif",
        "shre",
        "jcai@gmail.com",
        "coicmbatore",
        "098765342321"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To Generate A Five Set Of Customer Id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "User Should Launch The Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AddUser.user_Should_Launch_The_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click The Add User",
  "keyword": "And "
});
formatter.match({
  "location": "AddUser.user_Click_The_Add_User()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Give The valid DetailScO \"moha\",\"raseem\",\"rcaseem.moha@gmail.com\",\"chencnai\",\"94425932436\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I validate the customer id Showing or not",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUser.i_validate_the_customer_id_Showing_or_not()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To Generate A Five Set Of Customer Id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "User Should Launch The Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AddUser.user_Should_Launch_The_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click The Add User",
  "keyword": "And "
});
formatter.match({
  "location": "AddUser.user_Click_The_Add_User()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Give The valid DetailScO \"krishn\",\"kuma\",\"krcish@gmail.com\",\"tricchy\",\"09876554321\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I validate the customer id Showing or not",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUser.i_validate_the_customer_id_Showing_or_not()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To Generate A Five Set Of Customer Id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "User Should Launch The Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AddUser.user_Should_Launch_The_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click The Add User",
  "keyword": "And "
});
formatter.match({
  "location": "AddUser.user_Click_The_Add_User()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Give The valid DetailScO \"jaif\",\"shre\",\"jcai@gmail.com\",\"coicmbatore\",\"098765342321\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I validate the customer id Showing or not",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUser.i_validate_the_customer_id_Showing_or_not()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/resources/TwoD.feature");
formatter.feature({
  "name": "To Add Customer By Two Dim Map",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Customer Should Provide The Detail",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User Should Launch The Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AddUser.user_Should_Launch_The_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click The Add User",
  "keyword": "And "
});
formatter.match({
  "location": "AddUser.user_Click_The_Add_User()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Give The valid DetailTdMp",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "address",
        "phone"
      ]
    },
    {
      "cells": [
        "moqha",
        "raseem",
        "raseqem.moha@gmail.com",
        "chevnnai",
        "9442932436"
      ]
    },
    {
      "cells": [
        "krishna",
        "kumar",
        "krish@gmail.com",
        "trivchy",
        "0987654321"
      ]
    },
    {
      "cells": [
        "jai",
        "shree",
        "jai@gmail.com",
        "coivmbatore",
        "09876342321"
      ]
    },
    {
      "cells": [
        "krishna",
        "jai",
        "shree@gmail.com",
        "ponvdy",
        "09809874321"
      ]
    },
    {
      "cells": [
        "mohamed",
        "shree",
        "moha@gmail.com",
        "coivmbatore",
        "09876542321"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddUser.user_Should_Give_The_valid_DetailTdMp(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate the customer id Showing or not",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUser.i_validate_the_customer_id_Showing_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/resources/try.feature");
formatter.feature({
  "name": "To Add Customer By Scenario",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "To Add The User",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User Should Launch The Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AddUser.user_Should_Launch_The_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click The Add User",
  "keyword": "And "
});
formatter.match({
  "location": "AddUser.user_Click_The_Add_User()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Give The valid Detail",
  "keyword": "When "
});
formatter.match({
  "location": "AddUser.user_Should_Give_The_valid_Detail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate the customer id Showing or not",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUser.i_validate_the_customer_id_Showing_or_not()"
});
formatter.result({
  "status": "passed"
});
});