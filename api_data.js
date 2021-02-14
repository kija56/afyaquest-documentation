define({ "api": [
  {
    "type": "patch",
    "url": "/accessControl/roles/:id/approve",
    "title": "Approve Role",
    "name": "ApproveRole",
    "description": "<p>Approve User Role</p>",
    "group": "Access_Control",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "added[]",
            "description": "<p>Updated Descriptions of the role.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/accessControl/accessControl.routes.ts",
    "groupTitle": "Access_Control"
  },
  {
    "type": "post",
    "url": "/accessControl/roles",
    "title": "Create New Role",
    "name": "CreateRole",
    "description": "<p>Create New Role</p>",
    "group": "Access_Control",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the role.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descriptions of the role.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "permissions",
            "description": "<p>Permissions of the role.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "approvalStatus",
            "description": "<p>Approve Status of the Role</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-Response:",
          "content": "    {\n\"approvalStatus\": 0,\n\"_id\": \"5f60c964bbbc7b2db4ea549b\",\n\"name\": \"Administrator\",\n\"description\": \"Controls all system activities\",\n\"createdAt\": \"2020-09-15T14:02:12.035Z\",\n\"updatedAt\": \"2020-09-15T14:02:12.035Z\",\n\"__v\": 0\n    },",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/accessControl/accessControl.routes.ts",
    "groupTitle": "Access_Control"
  },
  {
    "type": "get",
    "url": "/accessControl/permissions",
    "title": "Fetch All Permissions",
    "name": "Get_All_Permissions",
    "description": "<p>Get all Permissions</p>",
    "group": "Access_Control",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-Response:",
          "content": "   [\n    {\n        \"_id\": \"5f607b1d5b853905d0883d27\",\n        \"moduleName\": \"access-control\",\n        \"displayName\": \"Can create,update and delete role\",\n        \"genericName\": \"write-roles\",\n        \"createdAt\": \"2020-09-15T08:28:13.963Z\",\n        \"updatedAt\": \"2020-09-15T08:28:13.963Z\",\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"5f607b1d5b853905d0883d28\",\n        \"moduleName\": \"staff\",\n        \"displayName\": \"Can create,update and delete staff \",\n        \"genericName\": \"write-staff\",\n        \"createdAt\": \"2020-09-15T08:28:13.990Z\",\n        \"updatedAt\": \"2020-09-15T08:28:13.990Z\",\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"5f607b1e5b853905d0883d2d\",\n        \"moduleName\": \"access-control\",\n        \"displayName\": \"Can approve role\",\n        \"genericName\": \"approve-roles\",\n        \"createdAt\": \"2020-09-15T08:28:14.096Z\",\n        \"updatedAt\": \"2020-09-15T08:28:14.096Z\",\n        \"__v\": 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/accessControl/accessControl.routes.ts",
    "groupTitle": "Access_Control"
  },
  {
    "type": "get",
    "url": "/accessControl/roles",
    "title": "Fetch All Roles",
    "name": "Get_All_Roles",
    "description": "<p>Get All Role</p>",
    "group": "Access_Control",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-Response:",
          "content": "    [\n    {\n        \"_id\": \"5f607b1e5b853905d0883d2f\",\n        \"approvalStatus\": 1,\n        \"name\": \"appUser\",\n        \"description\": \"Normal user\",\n        \"createdAt\": \"2020-09-15T08:28:14.431Z\",\n        \"updatedAt\": \"2020-09-15T08:28:14.431Z\",\n        \"__v\": 0,\n        \"rolePermissions\": {\n            \"permissions\": []\n        }\n    },\n    {\n        \"_id\": \"5f60c964bbbc7b2db4ea549b\",\n        \"approvalStatus\": 0,\n        \"name\": \"Administrator\",\n        \"description\": \"Controls all system activities\",\n        \"createdAt\": \"2020-09-15T14:02:12.035Z\",\n        \"updatedAt\": \"2020-09-15T14:02:12.035Z\",\n        \"__v\": 0,\n        \"rolePermissions\": {\n            \"permissions\": []\n        }\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/accessControl/accessControl.routes.ts",
    "groupTitle": "Access_Control"
  },
  {
    "type": "patch",
    "url": "/accessControl/grantPermission",
    "title": "Assign or Unassign Permissions to a Role",
    "name": "GrantPermission",
    "description": "<p>Grant Permissions to a Role</p>",
    "group": "Access_Control",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "added[]",
            "description": "<p>Updated Descriptions of the role.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/accessControl/accessControl.routes.ts",
    "groupTitle": "Access_Control"
  },
  {
    "type": "patch",
    "url": "/accessControl/roles/:id",
    "title": "Update Role",
    "name": "UpdateRole",
    "description": "<p>Update Role</p>",
    "group": "Access_Control",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>New Name of the Role.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Updated Descriptions of the role.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/accessControl/accessControl.routes.ts",
    "groupTitle": "Access_Control"
  },
  {
    "type": "post",
    "url": "/app/email-check",
    "title": "Check email address availability",
    "name": "CheckEmailAvailability",
    "description": "<p>Login a user.</p>",
    "group": "AppUsers",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/users/user.routes.ts",
    "groupTitle": "AppUsers"
  },
  {
    "type": "post",
    "url": "/app/token",
    "title": "Check user information",
    "name": "CheckUserInformation",
    "description": "<p>Checks user if available in the system.</p>",
    "group": "AppUsers",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/users/user.routes.ts",
    "groupTitle": "AppUsers"
  },
  {
    "type": "get",
    "url": "/app/user/create",
    "title": "Create new user",
    "name": "CreateUser",
    "description": "<p>Register new user through social networks</p>",
    "group": "AppUsers",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/users/user.routes.ts",
    "groupTitle": "AppUsers"
  },
  {
    "type": "post",
    "url": "/users/invite",
    "title": "Invite User",
    "name": "InviteUser",
    "description": "<p>Invite User to Afya Quest</p>",
    "group": "CMSUsers",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Record identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/users/user.routes.ts",
    "groupTitle": "CMSUsers"
  },
  {
    "type": "post",
    "url": "/users/invite",
    "title": "Invite User",
    "name": "InviteUser",
    "description": "<p>Invite User to Afya Quest</p>",
    "group": "CMSUsers",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Record identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/users/user.routes.ts",
    "groupTitle": "CMSUsers"
  },
  {
    "type": "post",
    "url": "/users/invite",
    "title": "Invite User",
    "name": "InviteUser",
    "description": "<p>Invite User to Afya Quest</p>",
    "group": "CMSUsers",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Record identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/users/user.routes.ts",
    "groupTitle": "CMSUsers"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "Login",
    "name": "LoginUser",
    "description": "<p>Login a user.</p>",
    "group": "CMSUsers",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Record identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "                 { userType: 'afyaQuestUser',\ndeleteReason: '',\nchangePassword: false,\ndeleted: false,\ndisabled: false,\n_id: 5f4f526f9127bf17c06c3c93,\nfirstName: 'Root',\nlastName: 'Admin',\nuserName: 'root@afyaquest.co.tz',\ntype: 4,\nrole: 5f4e63cff4e8050004995471,\nemail: 'root@afyaquest.co.tz',\nprivateName: 'Root Admin',\npassword: '$2b$10$LJyLiQposmfaLah4Y5h/2u1hR/ANwbl1zd1IKtFrNgcCME7isk2qm' }",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/users/user.routes.ts",
    "groupTitle": "CMSUsers"
  },
  {
    "type": "post",
    "url": "/users/register",
    "title": "Register User",
    "name": "RegisterUser",
    "description": "<p>Register</p>",
    "group": "CMSUsers",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>Phone number of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idType",
            "description": "<p>ID type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idNumber",
            "description": "<p>ID Number.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Record identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "filename": "src/modules/users/user.routes.ts",
    "groupTitle": "CMSUsers"
  },
  {
    "type": "post",
    "url": "/hcp-groups/groups",
    "title": "Create New health Care Provider Group",
    "name": "CreateHCPGroup",
    "description": "<p>Create New health Care Provider Group</p>",
    "group": "HCP_Groups",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>HCP name/title.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descriptions of HCP group.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "coverImage",
            "description": "<p>Image of the HCP group.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-Response:",
          "content": "     {\n    \"_id\": \"5f7c6b46337b17397c44ec1b\",\n    \"name\": \"General Medical Practitioners\",\n    \"description\": \"This is test group\",\n    \"coverImage\": \"test image\",\n    \"createdAt\": \"2020-10-06T13:04:06.929Z\",\n    \"updatedAt\": \"2020-10-06T13:04:06.929Z\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/hcpGroups/hcpGroup.routes.ts",
    "groupTitle": "HCP_Groups"
  },
  {
    "type": "delete",
    "url": "/hcp-groups/groups/:groupId",
    "title": "Delete Health Care Provider Group",
    "name": "Delete",
    "description": "<p>Delete Health Care Provider Group</p>",
    "group": "HCP_Groups",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-Response:",
          "content": "{\n    \"message\": \"Removed Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/hcpGroups/hcpGroup.routes.ts",
    "groupTitle": "HCP_Groups"
  },
  {
    "type": "get",
    "url": "/hcp-groups/groups",
    "title": "Fetch All Health Care Provider Groups",
    "name": "GetHCPGroups",
    "description": "<p>Fetch All Health Care Provider Groups</p>",
    "group": "HCP_Groups",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-Response:",
          "content": "     {\n    \"_id\": \"5f7c6b46337b17397c44ec1b\",\n    \"name\": \"General Medical Practitioners\",\n    \"description\": \"This is test group\",\n    \"coverImage\": \"test image\",\n    \"createdAt\": \"2020-10-06T13:04:06.929Z\",\n    \"updatedAt\": \"2020-10-06T13:04:06.929Z\",\n    \"__v\": 0\n}\n     {\n    \"_id\": \"5f7c6b46337b17397c44ec1c\",\n    \"name\": \"General Medical Practitioner\",\n    \"description\": \"This is test group\",\n    \"coverImage\": \"test image\",\n    \"createdAt\": \"2020-10-06T13:04:06.929Z\",\n    \"updatedAt\": \"2020-10-06T13:04:06.929Z\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/hcpGroups/hcpGroup.routes.ts",
    "groupTitle": "HCP_Groups"
  },
  {
    "type": "get",
    "url": "/hcp-groups/groups/:groupId",
    "title": "Get HCP Group By ID",
    "name": "Get_HCP_Group_By_ID",
    "description": "<p>Get HCP Group By ID</p>",
    "group": "HCP_Groups",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-Response:",
          "content": "    {\n    \"_id\": \"5f7c6b46337b17397c44ec1b\",\n    \"name\": \"General Medical Practitioners\",\n    \"description\": \"This is test group\",\n    \"coverImage\": \"test image\",\n    \"createdAt\": \"2020-10-06T13:04:06.929Z\",\n    \"updatedAt\": \"2020-10-06T13:04:06.929Z\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/hcpGroups/hcpGroup.routes.ts",
    "groupTitle": "HCP_Groups"
  },
  {
    "type": "patch",
    "url": "/hcp-groups/groups/:groupId",
    "title": "Update Health Care Provider Group",
    "name": "UpdateHCPGroup",
    "description": "<p>Update Health Care Provider Group</p>",
    "group": "HCP_Groups",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>HCP Group Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descriptions of HCP group.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "coverImage",
            "description": "<p>Image of the HCP group.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-Response:",
          "content": "     {\n    \"_id\": \"5f7c6b46337b17397c44ec1b\",\n    \"name\": \"General Medical Practitioners\",\n    \"description\": \"This is test group\",\n    \"coverImage\": \"test image\",\n    \"createdAt\": \"2020-10-06T13:04:06.929Z\",\n    \"updatedAt\": \"2020-10-06T13:04:06.929Z\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/hcpGroups/hcpGroup.routes.ts",
    "groupTitle": "HCP_Groups"
  },
  {
    "type": "post",
    "url": "/hcp-groups/specializations",
    "title": "Create New Health Care Specialization",
    "name": "CreateHCPSpecializations",
    "description": "<p>Create New Health Care Specialization</p>",
    "group": "HCP_Specializations",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Specialization name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descriptions of HCP group.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "specialty",
            "description": "<p>SpecialtyID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "tags",
            "description": "<p>Tags or key words of the  Specialization</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "coverImage",
            "description": "<p>Image of the HCP Specialization</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-Response:",
          "content": "[\n    \"success\": true, \n     \"message\": \"Specialization created successfully\",\n    {\n    \"_id\": \"5f7d666cef480e22ccdc7e6d\",\n    \"name\": \"Cardiology\",\n    \"description\": \"This is specialized in cardiac and cardiovascular diseases\",\n    \"specialty\": \"5f7c6b46337b17397c44ec1b\",\n    \"tags\":[\"cardiac\",\"cardiovascular\"],\n    \"coverImage\": \"data:image/jpeg;base64,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\",\n    \"createdAt\": \"2020-10-07T06:55:40.060Z\",\n    \"updatedAt\": \"2020-10-07T06:55:40.060Z\",\n    \"__v\": 0\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/hcpGroups/hcpGroup.routes.ts",
    "groupTitle": "HCP_Specializations"
  },
  {
    "type": "delete",
    "url": "/hcp-groups/specializations/:id",
    "title": "Delete Health Care Provider Specialization",
    "name": "DeleteHCPSpecialty",
    "description": "<p>Delete Health Care Provider Specialization</p>",
    "group": "HCP_Specializations",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-Response:",
          "content": "{\n    \"message\": \"Removed Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/hcpGroups/hcpGroup.routes.ts",
    "groupTitle": "HCP_Specializations"
  },
  {
    "type": "get",
    "url": "/hcp-groups/specializations",
    "title": "Fetch All Health Care Provider Specializations",
    "name": "GetHCPSpecializations",
    "description": "<p>Fetch All Health Care Provider Specializations</p>",
    "group": "HCP_Specializations",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-Response:",
          "content": "[\n    \"success\": true, \n    \"message\": \"Specializations fetched successfully\", \n    [\n        {\n        \"_id\": \"5f7d666cef480e22ccdc7e6d\",\n        \"name\": \"Cardiology\",\n        \"description\": \"This is responsible in assisting doctors\",\n        \"specialty\": {\n            \"_id\": \"5f7c6b46337b17397c44ec1b\",\n            \"name\": \"Cardilogist\",\n            \"description\": \"This is test specialty\",\n            \"coverImage\": \"data:image/jpeg;base64,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\",\n            \"createdAt\": \"2020-10-06T13:04:06.929Z\",\n            \"updatedAt\": \"2020-10-06T14:16:09.342Z\",\n            \"__v\": 0\n        },\n        \"tags\":[\"cardiac\",\"cardiovascular\"],\n        \"coverImage\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQExAVFRIVDw8VFxgVFRUWFRgVFhUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGBAQGy0fHx0tLS0tKy0tLSstLS0tLS0tKy0tLS0tLS0tKy0tLS0tLS0tLS0tLS0rLS0tLS0tLS0rLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIDBAUGBwj/xABGEAACAQICBwUFBQQIBQUAAAABAgADEQQhBQYSMUFRYRMicYGRBzKhsfBCUsHR4RRicpIWIzM0Q4KishUkU3PxRFRjk8L/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAlEQEAAgECBgMAAwAAAAAAAAAAAQIRAzEEEhMUIUEyUWEicZH/2gAMAwEAAhEDEQA/APWFkqyFZMsyqQQiNEcJQit4QghEMBRRRQDFBDAEUMEBRRRQFBDKeP0lSojadwAOZhJnC3GvUA3m0840/wC0+ml1ojbPPhOC0nrljMQbbZAPBJ0rpWl578VSNvL23SWs+Go+/VUec5PSXtSoLcU1Ln0E82w+ruMrd4o2fFpr0PZ9WIuzTfJSN5currW+MYXMf7UMQ3uIFHU3MwMXrpjH31yPDKdRo/2agnvuT0E6XA6gYVPsA+MvPSNoTpatt5eQVdL4l99WofM/hIgK7cHPrPe6Wq2HAsKa+ksU9A0l3IPSOqvafcvn4YDEH/CeTUtB4pt1Iz6COjk+4PSOTBKPsiOrLUcJV4MuqWMP+HD/AEPxn/Tnvgwwj+xXlM9WzUcLR4ImpWLP2ZN/QTFT3M0F5QdgJOrZe2o8MOomJv8ApE2omK8Z7i1EcoOzA4S9WTtqPDV1Oxi7rgxVNVcad5JntzUgeEK4Yco6kr29Xhn9EMZ1+MU90/Z15RR1JO3qspJVkKyVZwehKI4RojhKHCGAQwFFFFAUUUBMB0EUUBRlSoFFybCNxFYICxNgBPINe9eHqsaFBrLmCRxmq0m0uWrqxpx5dFrd7Q6dG9Oj3358BPNK2KxmkKlht1CTuHujxm5qlqFVxRFWtdaZzz95vyE9c0RoajhkCUqYUDkPmZ2zWm27yxp6mt5t4h5fon2Y1CA1d7fur+c6vRmrNDDZrTBPWdm5lTEICJyteZemmjSm0MilVDNs2sBL+yJXp4Qg3tHEEGZdF+koEnBlKniOcs02vCpbR1og0N4AtFaLahAgMMBEewgAlDGSMIMsBYCIEAjSok5Mjc9JBEVPCANziZTzhU5ZxgG45xQWHKGA5ZKshWSrMqlWPEYseIBhghlBgJiJmLpPGue6mQ5wJNO6epYZC7sBYTzzRuuuI0hi1pUf6ukrXYnMkcpje07BVDst2pI4i+Uk9lmjHD9qAQPnPZWtK6fNvLhNrTbD2yluELvYXMho7plaxaQFMKl8yGY+CzyRGXW04jLjPabrOVH7PTPeb3rcBKXs81K27YquMt6qePUzG0DgTpDHlmzQMWP8IOQ+U9tpIEUKBYAWnW08sYh5dOnUtz2FECiwFhGtVjSxO6SLTtOT1mWPGKwjmaQt0gTXEhq0wY0Ex4MCrUwxEbTJXdNFY16IMCumIHGTU24yGpQI4XEjAI3HygXwY8GUUxHA5H4SwHgTxXkYMXnALExGEH0gLQGtERzMB6QMvM2lDWFs4x0PCSW5C3jnDs87fjAr7HUesUsbHj8IoyIlkiyJZKk5qkWPBjVWSATQUMF4yo+XTjGEQ4ysALX3zmNO6QK91M5zmsWmq2JxXYUDanTbvMOJ5TXoYRqhAGYy2jOnJ7libeoZCaFfGMNv3Ac+s7rQ+ikoqFVbACTYDCKoAAl9Vkm2ViDlE8411xpNeuL5Jhwo8Tcn8J6OJ5LrH3quNbow/lsJrT3cuIn+LU9kGEApVax3s+z5D/zO9ZrzjPZe1sEP+4/znaUBxmb/AClvRjFISotoGaJmjJl0GLZjgI4CBGUi2ZLaLZgRrH3hKxpBgOkb0QYQY4NAq1KBHC4kAUj3T5HdNP4yN6St4wKaYngwsSfL1kpe+7cIKlAjqJWFO3um2e7h6QNFWjgZnjFlblxbkd6+vDzlpKgNgDwveBMBy9YvlGBvQQ7XE/X6wH/AQH06xpa2Z+vrnK+JxCAd6pb+E5/XWDKYuOsUzG0jh/vKf8t/iReKXllOaPtqJRkgtBDJhRvAYpzetetlLCKV2gahG7l1MsRnYb1XEAZXHWcRrLrG9Vv2XDtvyd+Q4zzDTGtVerUZlqsL8ibWnYanUe0prsjvN7xM7104jzLna0+nS6I0SlNQif5m4k8c50+CwgQZCV9H4PYAWaVMWnG1srWEiryjgYhnDfnMtlPJ9J/3jHUjvZ6oH8iNPVzlPLNKNfH4pDvGIokcMqlLY+c6ae7z8RtH9tH2WVL4Vl+7WYfIzvU3Tyj2YYgpiK+HJyI2rdVNj+E9VQ5TN/k3ozmkDHAQAR6iZdRAjgIhDAUMUEBQWjooDLeUYQeMlIgJ9OZygMBjrgyO6/ZYHnsgv/sBtKeO0rRo/wBpUVOtSpSp/Bm2v9MmRoXI6yKsEtckDqTac1j9daIUigwq1OApJWrf6giovqZzWlf2zEPtGg7iy27lNBuBy7TZNxe1+kk2wYdhidM4dCR2ysRvC94+YEyMXrJTQFqNOoT4BFv127Ab9+U4zG6J0hSvixRNQpTYJT7RWIvfNhfO177K3JsBOD0fp+vVY06tdipVsibAeUvN4zhnE/b2U6+HaWitC9bZQ7O02zY5A7aqwIv8pWxGs2kKlY4emKKVAgYi1VtlTuJcqFv6was6ENKnTd7FhSUDnsj3b+Rm/hkC+8LMd5P5y1t+JamfcuE01/xXatUxNyQTamxU2G+zBQB5mcTi8XVLnaZ7g/bclh5z1vWXHUqaZsDU+yosWIuL5DcOs5TQWrKY7bq1GsTXZbLewUAEt6ZeJE7xqY3ea/DRO0uQGkcR/wBZ/wCZop6gvs4wX3j6j8Yo6rPbfr0qGC8wdadYP2VCEQvVNNmAG4KN7N0znGIy9yHXTWZcJSIUg1WBsOXUzwTS+lXrOWZiSSbnnJtP6aqYhyzMSSc/rlKWAwL1XCIu0xM9VaxSHKZzKTRWCaq6ooJZiJ71qrobsaSrbvWFzMfUnVBcMod+9VIzPAdBO7o0rThe+Wog6mvAxMtpJaKc20cerXgZOMCwH3t4TzHWrAO+l1oUdjbxOGQjbNlHZlmLHick3CdBp3XZadQ4XC0xiMQPe72zRpcL1KmfXui5NjyMWitX62KvUxWKdmZQNmh/y9MC99m6HtGGf2n8pa2xLnqU54w5DQmiquE0iGazUiaimoFNNRfiVfMC4nqOHxCN7rq3gwPynH6V1GwVO/8Ay1JieLIrHzLXJnL6X0IMMO0oA0nVS+yhIRgovsmnewJF7MtiDYzE6mZ8tU04rHh6+JIs43UfWcVMMz4msq9nWqIruyguod1U3JG0bIRfjskyzjvaBgaZsrmo3JASfl+M01l1cInDDXHF1v7vgGA4NU7vwa95Zp09KVvfril0pocum0SB8IHYPlmTYdch8ZXq4+kou1VAPHL13TmU1SZs6uJrMeP9ZsfCmB85bo6n4VTdqaMebjbb1cmBPX1wwSmwrq7cqf8AWH0p7R+EgOtm1/ZYSu/UoEHrVZD8JqU8BRUWCgD0HoLSamtMe6o8bQMMaVx9T3MNSQfv1GqH+Wkg/wB0ZVwWkag72LCf9qioNujVWcg+Fp0fa34E/KG7HhCOU/ogX/tq+Irf93Evb+VLCW8LqphqWa0qQPMIGb+Zs5umkeJ/KDshzv0EKqDC07WD36Xy+AykNWlSB91r8xcfod/wmg1JfPpvkdVkGRAI5AXb+UQjONRM+7fOxsTbzzveZ1PB4GheouFoUyWJL7KDvXzJe2+Q6U0yvadhSw9U1AobZNqY2cwG7xHd/KYOl6gqgDE4jCoqG4UsaxB5lRYX9ZuNOZcba9atHH6/0KVxTbtyP+ihNvFh3flOK03rjisSbBFopzNtv1l+vpnRlIWNWtXP3UHZr5bIHxnC4muGdigIUsdkHMgcATOtdOHm1OJv6dHhtK0KNJl2Wq1qgs7sfgOkzqOn61Ndik5QEk905577nyEp4PRlesbJSZieQM6fQvs6xFY991pgbwc2HivCa/hVzjrXcu+kahNzUYk82MU9PT2U0bZ12v8Aw/rFHVhe1u9FxNcU0LsclFzPLtb8VtE1qVUs9Rdlhe4C8RbgJ3mtWFrVaGxS2b7akhrgFeO7ynGYHViqHYXBVz3jwAz3Tz1fRl5ymh2qMq0lZ3Yi9hkOpM9a1L1QXCoGYA1SMyc7dBN3QuhqdBdlFHjb8Zs06dpbWz4giPs2jStLAEjqVVQXZgo5kgfOZWM1pwtP/FDH92x+O70vOeWsNqKcKdfKlU2w2G2s977TfAAAesDDS2I/xeyTkoC/7fzjI7lzs7yB4kD575zftB0g9DBlkOyalSlS2sxsq7hWYHeDY2B4FhKOC1UxAbbfHVVPNCFPXvZkybFap0WV71Klao9MoTWdqikEglWDHMG2/eN8qOK1Vw5pIo2bMe8/M1D79/A90dFWeh6JFUrcHZHOee1NXsTQJFOvWoW3BwlemOilgCR4sTL1AY4LZtLVAvKnSo0j6nbtOePLWXYU9MYYo+JaraijAF6ytSQki/cNQDbte2XGcLrDpRtINs4ZWp4UkbVdhslwOGHUi5/jOQ6nI3l0TRY9q4fE1Baz4ioa7X35B+4PJRBjapUFmPDde/qeP1vmsJlr6C1EoVaCdslqa27JAxACAWBYjM3uTnvvc5mdDhdAUMMP6rCoOoAv5nfM/wBnWmu1oNRKktRa21zVyzL6bvSdTUqnlLEmFRdrgoHhHhX5geEx9FaVvia+DJuaWw6c9hwCVJ/dJA8COU2vh04yzCROS7Lm1vnD2Q/8wW8o5UPLzMKQReXrCLcvyki4Y/8AmZuP09gqB2a2MpB/ubYZ/Kmt2PpAv7fn8oLk9flMB9c6Tf3fB4qvf7XZ9inmaxVreCmRNpjSVT3aOGwy8S5fEMBzy2FU+N5MjpWQfacDoMz6DMyOtWRF2iLKPtOwpIPEnMek5jReicUzVDicfiChfuLQFKiGvm12VdvedysN01cFq5hqZDjDIzi9qldnxNXPk9Ukj1gUtI674WiqlXXEFmC7OEXtOhJrsRT9SDKeD0ziM1wmApUgxLF8TXNRyx4mmlyf551VfBq42almXkQNn0tIcHg6FE7NGkiE591Qo9QM98o8o9oui9I1Xp1axFUlCn9TSKKo32tcsRv3mc9o3UPG1rEUSFPF7KPjmZ76EZwdobNwLZg2PHIZZc7xqpYdwknmfdPj+Yz5zpGpMRh57cPW1ptPt5bo72TtvrVgOiC59TOm0XqRgsOf7M1nH3rML9R7oPjOuNEn3jfoMh+vnD2YA5CZm8y6V0qV2hRp0iBZVVF5KLn8APQxwoKGDHNhexPC++w3DyktWpbdIadIk3My6LQMUbaCBK+6QpRlj6yiAgJEjXrgeAko+rzPx1O17i6tfwz3iZtssKdHTmFxRqUUqJVKWFRPetfdcHeOsr6L1RwKgv2O2203vsz7PIC55TO0Fq/gsAHaguyWzZmIyUZ2vYZDrNPQ2mqdYPsG4DZHgwIyYdMj6TNSWvQp007qoByyli7HoOZ/KZlOuAwYmwBmp2l9w9ZuEN7EcST47pVxVW52V4byPlLVr9flMXVjGpWoLUuC1rOOIce8COd8/MSzHhM+cK+sOGY4aowBLLssLb8mFz6EzksFpZSMwLz1RAAM7W+t88/1iwFI1TVFXD0htXsbN/pW8xPhrdUbSQOUydKbRGZ2R13nwXjLlHSOCoNtftD1GG4U6SIPVrt6SZtO9q5qUdFM7MSdqoHYePesIyYXdRcUaSsgT3mByzbdbM8f1nbdrVtfYsLfaIUfGcFVx+lSPeoYRPFVt5IPxmNiK1K9sRparVcm2xQ3k8gRcyxWUmYj26TQmijRxNXG4rHUQ9QNdaTEhbm4HaNZTYADMcJvPrro9O6tftW5UEesSfFAQPMzD0Hqfg2AqGjc8TWbtHH8QJIU9N86nB6PpU+6aYUcGA2UPIEfZPjluseE1MzLNYiNmY2ttZ/7DRtTo2IdKI8dldpvlGhtLVt9elh1/wDgo7Tfz1iQfHZnR/s+yboAR90//k8PA+okiVA3Mkb1ta3iPrpI05U6n9r/AHjEV8RfeKtZzT/+tbJ6Camj9XMLRGzToqtuCKq+pH4mbB6nyH1eIDyH15CBSVfupYcyD8B7x8rcudrQpcLWGRtkc+YByEkFh9fMwbZO4eZlDgoGfx/WDb5ep+s4Njic/rgINrln14QGlWJzIK2G8G9872zsOHWEWysNojcTnb/MYiBxN/l6RGsIBKX359OHpx84S0q18aqkAkAm9gSATbkDvmLX0nWdlWmjBSzK9lPap3SQ1mFgLi18wbwNjGY9KYuzBcjvIBNuQ4zGfTVStsmhT26RYBnVk2gp5KTdWFwbMNwk2j9DurOz1WcVALq4GR3XuMt1hkAMppUcEFAUCwAAAHIZAQqjgMKaRe9UurVCyg3ZgCANksxOVwTlbfLTVSdwlpcOI8UxCM7YeGaOzBAjpOb7Le8OWQI4MPy4el5I3EUdoZGzDNTyPUcQeI/QxtCttCx7rA2ZRmQfxHEG0CX6zkGkQ5pVAhs5pVApO4MVOybdDYyfru8YG9flA8i0cGqlUxVJ1ZSAVrPdQw95lBa1QHgTl8p09MJSBKYnDoGsSajktfdmEHLhNfSNGmSQyhhyKhh4Z7pmLoSiT/daQB/d/ATExK+EVHT+ConarY1aj9Eew8AQBJG9oeGbKlTrViPuoLeoLfETTwurGHGYoU16img/C/ymrQ0ZSUZKT4ZD4S4kzDIGsbMt1puG+6KNRv8AU5pL8Zz9Stjxfs+ww1Mkm+yit4tsg55n7U9AGGQfZHgBc/nGYrCI6lWRdgixDAEEciDl6xj9TLyrH1l/9Rpe54qmZ8szMv8A4hotTcjEVyPvXt6EgTutIeznBVCSqPTJ4o9l8lYEDwAAmOfZXh//AHNY9AKXz2Mp0iun7crW1vWGINdcPT/scGq/xbC/7A5mdpPXrEOLCpsDlTXY/wBbFmPlsztMN7McEpvUas/7u3b/AGBSfhOh0dq5hcPnSw1OmfvWDP8AzG5+JmuakbQxyatvlb/HkWB1b0hjbPssqG1nrsyqf4Q12c8ufOdzq3qXQwt+0/r6xAB7tivG6AEEe8udwRcHmZ2aUGU3RcuIb47N93hkPDfLAQMPeJNxnutY3t9Z5zNrzZumlWplNNk3uLbQtsgX5AHKwyyuOQ3S6KosSwNs/C1r3t4cDnKlBABYXHMtv8bcSc9+UfTYXsASbnM7vy48OvHfh1TK2yLqQV+7y/hJ3eBy3bpLsh88wRx3MvT9NxkKi2/P4AcMh4GNqMTuyIsLjeB4cR0gTg7PvWA+9w/zcjHl/r9JCobc/rwP5HpHLhdnccuR3Dw5eEBxcbzG/tBPui/XhIqlZAbX22+6LeZtJChcAglOY4wEQx35/L0h2GkxcAb7kDz9JEldag7jem8cweRlDHUDItmdw4mUhiGchaast7gsyX2WHB0JBA6iWaGAs20zEkHu81vvAbfY8jL0DMw2iu6oqkVGR3KsRnZr9033jO3pyl9KSqLAAAcBJIIAiiJg2oCtAYC0YTAO1FGXigSyHEUjfbXJwLdGX7p/A8D0JBmEMCGjUDDaAtz2t4PEEcDHn1+A/X4yKslj2ii+7aHMfeH7w+Iy5WeGBAO1cEXGzxHPLOBn6Uwm2MmseS/V/PKUcG9SnkygDmd/nw87mbhHIWH1w3CMKDlfqfw/STAgpYpTwJ6nd9eAlkYlT9ryEaaCnf6D6vEMKo3AAQJhVHMAfXlEHHj1MC4ZeVzzMd2K+PSURPUXib9Bu+vGQvXUfkN/14S4aQHSQO4Fwq3NuG88IFf9o5JYczvjO1c+6nm34S1sMSDlkc+PlyHlJwnP4SDPFNzvNzy4en5yZMGxNy1vD5Ey5kI1nOVhkeO/zjACYdRJQnIQKbb98dtcpQ1afEkfXWOXoLCECJgCLHdAr1sUq82Oe4X3Gx6XHLfGinUZrkgKCCLXz6HmI9VSkuQsLk5czvMqLjHqj+rFgHKttXDdGWQWX7KiC2S3N/PdlIGxrVLikONiTvU9VO8HpHU9H3H9YQ5O/keRtwMugW3QKiYEEq7ZOORO/jnxHSW1UDcLQxSg3gvBFAV4CYYIDSY0x8YYAjTCYIAigigTCERohgOlZhsG4yQm5/dJ4+B4yxERAh8M+vD68IfE+Q+ryL3DYnuHd06EydRyFoCUeUcPXxjPjCTzMBxa28wCrcXG68j7AE3+e70ky0wIEfZkk5kj0/Ux60wPrKFnAjNok2sYDywEj7Qk7NiMr3/WI0xlfeDfKPz8IDFS19oggnKSLusBYCEJHWgALHXkNXEKu8yBK7s+zsWXZ39YFtn85QXEvUZk2GUBcm5niJPg8IUuSxJJueV+ktWgV8HSZUCubkAAnrJwtuEdBAUUV4rwFFFFAEUUUBRRRQI2aNjyBGsIDDBDBAEUUUCUQwRQDDFFADqCLGVlOydljfl4dYooEwBPSPVIooCaqBlI22ibZQxQHGmMri5GfnHZnpFFAcFhiigQYnEhBtHhIKdZqhyyQrlziikEyYQWsxv+MsgRRShQxRQBeC8UUBWhtFFAUUUUBRpMUUBpMaWiigC8BMUUAQRRQBFFFA//2Q==\",\n        \"createdAt\": \"2020-10-07T06:55:40.060Z\",\n        \"updatedAt\": \"2020-10-07T06:55:40.060Z\",\n        \"__v\": 0\n    }\n]\n]\n[\n    {\n        \"_id\": \"5f7d666cef480e22ccdc7e6d\",\n        \"name\": \"Nurse\",\n        \"description\": \"This is responsible in assisting doctors\",\n        \"group\": {\n      \n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/hcpGroups/hcpGroup.routes.ts",
    "groupTitle": "HCP_Specializations"
  },
  {
    "type": "get",
    "url": "/hcp-groups/specializations/:id",
    "title": "Get HCP Specialty By ID",
    "name": "Get_HCP_Specialization_By_ID",
    "description": "<p>Get HCP Specialization By ID</p>",
    "group": "HCP_Specializations",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-Response:",
          "content": "[\n    \"success\":true,\n    \"message\":\"Specialization fetched successfully\",\n    {\n        \"_id\": \"5f7d6ec7ac612a2c204c185a\",\n        \"name\": \"Cardiology\",\n        \"description\": \"Responsible for providing assistance to doctors\",\n        \"group\": {\n            \"_id\": \"5f7c6b46337b17397c44ec1b\",\n            \"name\": \"General Medical Practitioners\",\n            \"description\": \"This is test group\",\n            \"coverImage\": \"data:image/jpeg;base64,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\",\n            \"createdAt\": \"2020-10-06T13:04:06.929Z\",\n            \"updatedAt\": \"2020-10-06T14:16:09.342Z\",\n            \"__v\": 0\n        },\n        \"coverImage\": \"data:image/jpeg;base64,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\",\n        \"createdAt\": \"2020-10-07T07:31:19.497Z\",\n        \"updatedAt\": \"2020-10-07T07:31:19.497Z\",\n        \"__v\": 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/hcpGroups/hcpGroup.routes.ts",
    "groupTitle": "HCP_Specializations"
  },
  {
    "type": "patch",
    "url": "/hcp-groups/specializations/:id",
    "title": "Update Health Care Provider Specialization",
    "name": "UpdateHCPSpecialization",
    "description": "<p>Update Health Care Provider Specialization</p>",
    "group": "HCP_Specializations",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>HCP Specialization Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descriptions of HCP Specialization.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "tags",
            "description": "<p>Tags or Specialization keyword</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "coverImage",
            "description": "<p>Image of the HCP group.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-Response:",
          "content": "    [\n        \"success\": true, \n        \"message\": \"Specialization updated successfully\",\n        {\n    \"_id\": \"5f7d666cef480e22ccdc7e6d\",\n    \"name\": \"Cardiology\",\n    \"description\": \"Responsible for providing assistance to doctors\",\n    \"specialty\": \"5f7c6b46337b17397c44ec1b\",\n    \"tags\":[\"cardiovascular\", \"cardiac\", \"heart\"],\n    \"coverImage\": \"data:image/jpeg;base64,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\",\n    \"createdAt\": \"2020-10-07T06:55:40.060Z\",\n    \"updatedAt\": \"2020-10-07T07:10:40.790Z\",\n    \"__v\": 0\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/hcpGroups/hcpGroup.routes.ts",
    "groupTitle": "HCP_Specializations"
  },
  {
    "type": "post",
    "url": "/hcp-groups/specialties",
    "title": "Create New Health Care Specialty",
    "name": "CreateHCPSpecialty",
    "description": "<p>Create New Health Care Specialty</p>",
    "group": "HCP_Specialties",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Specialty name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descriptions of HCP group.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "group",
            "description": "<p>HCP Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "coverImage",
            "description": "<p>Image of the HCP Specialty</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-Response:",
          "content": "{\n    \"_id\": \"5f7d666cef480e22ccdc7e6d\",\n    \"name\": \"Nurse\",\n    \"description\": \"This is responsible in assisting doctors\",\n    \"group\": \"5f7c6b46337b17397c44ec1b\",\n    \"coverImage\": \"data:image/jpeg;base64,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\",\n    \"createdAt\": \"2020-10-07T06:55:40.060Z\",\n    \"updatedAt\": \"2020-10-07T06:55:40.060Z\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/hcpGroups/hcpGroup.routes.ts",
    "groupTitle": "HCP_Specialties"
  },
  {
    "type": "delete",
    "url": "/hcp-groups/specialties/:id",
    "title": "Delete Health Care Provider Specialty",
    "name": "DeleteHCPSpecialty",
    "description": "<p>Delete Health Care Provider Specialty</p>",
    "group": "HCP_Specialties",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-Response:",
          "content": "{\n    \"message\": \"Removed Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/hcpGroups/hcpGroup.routes.ts",
    "groupTitle": "HCP_Specialties"
  },
  {
    "type": "get",
    "url": "/hcp-groups/specialties",
    "title": "Fetch All Health Care Provider Specialties",
    "name": "GetHCPSpecialties",
    "description": "<p>Fetch All Health Care Provider Specialties</p>",
    "group": "HCP_Specialties",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-Response:",
          "content": "[\n    {\n        \"_id\": \"5f7d666cef480e22ccdc7e6d\",\n        \"name\": \"Nurse\",\n        \"description\": \"This is responsible in assisting doctors\",\n        \"group\": {\n            \"_id\": \"5f7c6b46337b17397c44ec1b\",\n            \"name\": \"General Medical Practitioners\",\n            \"description\": \"This is test group\",\n            \"coverImage\": \"data:image/jpeg;base64,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\",\n            \"createdAt\": \"2020-10-06T13:04:06.929Z\",\n            \"updatedAt\": \"2020-10-06T14:16:09.342Z\",\n            \"__v\": 0\n        },\n        \"coverImage\": \"data:image/jpeg;base64,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\",\n        \"createdAt\": \"2020-10-07T06:55:40.060Z\",\n        \"updatedAt\": \"2020-10-07T06:55:40.060Z\",\n        \"__v\": 0\n    }\n]\n[\n    {\n        \"_id\": \"5f7d666cef480e22ccdc7e6d\",\n        \"name\": \"Nurse\",\n        \"description\": \"This is responsible in assisting doctors\",\n        \"group\": {\n            \"_id\": \"5f7c6b46337b17397c44ec1b\",\n            \"name\": \"General Medical Practitioners\",\n            \"description\": \"This is test group\",\n            \"coverImage\": \"data:image/jpeg;base64,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\",\n            \"createdAt\": \"2020-10-06T13:04:06.929Z\",\n            \"updatedAt\": \"2020-10-06T14:16:09.342Z\",\n            \"__v\": 0\n        },\n        \"coverImage\": \"data:image/jpeg;base64,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\",\n        \"createdAt\": \"2020-10-07T06:55:40.060Z\",\n        \"updatedAt\": \"2020-10-07T06:55:40.060Z\",\n        \"__v\": 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/hcpGroups/hcpGroup.routes.ts",
    "groupTitle": "HCP_Specialties"
  },
  {
    "type": "get",
    "url": "/specialties/:specialtyID/doctors",
    "title": "Get HCP Specialty By ID",
    "name": "Get_Doctors_by_Specialty",
    "description": "<p>Get Doctors in a Speciality</p>",
    "group": "HCP_Specialties",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-Response:",
          "content": "[\n    {\n        \"_id\": \"5f7d6ec7ac612a2c204c185a\",\n        \"name\": \"Nurse\",\n        \"description\": \"Responsible for providing assistance to doctors\",\n        \"group\": {\n            \"_id\": \"5f7c6b46337b17397c44ec1b\",\n            \"name\": \"General Medical Practitioners\",\n            \"description\": \"This is test group\",\n            \"coverImage\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQExAVFRIVDw8VFxgVFRUWFRgVFhUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGBAQGy0fHx0tLS0tKy0tLSstLS0tLS0tKy0tLS0tLS0tKy0tLS0tLS0tLS0tLS0rLS0tLS0tLS0rLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIDBAUGBwj/xABGEAACAQICBwUFBQQIBQUAAAABAgADEQQhBQYSMUFRYRMicYGRBzKhsfBCUsHR4RRicpIWIzM0Q4KishUkU3PxRFRjk8L/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAlEQEAAgECBgMAAwAAAAAAAAAAAQIRAzEEEhMUIUEyUWEicZH/2gAMAwEAAhEDEQA/APWFkqyFZMsyqQQiNEcJQit4QghEMBRRRQDFBDAEUMEBRRRQFBDKeP0lSojadwAOZhJnC3GvUA3m0840/wC0+ml1ojbPPhOC0nrljMQbbZAPBJ0rpWl578VSNvL23SWs+Go+/VUec5PSXtSoLcU1Ln0E82w+ruMrd4o2fFpr0PZ9WIuzTfJSN5currW+MYXMf7UMQ3uIFHU3MwMXrpjH31yPDKdRo/2agnvuT0E6XA6gYVPsA+MvPSNoTpatt5eQVdL4l99WofM/hIgK7cHPrPe6Wq2HAsKa+ksU9A0l3IPSOqvafcvn4YDEH/CeTUtB4pt1Iz6COjk+4PSOTBKPsiOrLUcJV4MuqWMP+HD/AEPxn/Tnvgwwj+xXlM9WzUcLR4ImpWLP2ZN/QTFT3M0F5QdgJOrZe2o8MOomJv8ApE2omK8Z7i1EcoOzA4S9WTtqPDV1Oxi7rgxVNVcad5JntzUgeEK4Yco6kr29Xhn9EMZ1+MU90/Z15RR1JO3qspJVkKyVZwehKI4RojhKHCGAQwFFFFAUUUBMB0EUUBRlSoFFybCNxFYICxNgBPINe9eHqsaFBrLmCRxmq0m0uWrqxpx5dFrd7Q6dG9Oj3358BPNK2KxmkKlht1CTuHujxm5qlqFVxRFWtdaZzz95vyE9c0RoajhkCUqYUDkPmZ2zWm27yxp6mt5t4h5fon2Y1CA1d7fur+c6vRmrNDDZrTBPWdm5lTEICJyteZemmjSm0MilVDNs2sBL+yJXp4Qg3tHEEGZdF+koEnBlKniOcs02vCpbR1og0N4AtFaLahAgMMBEewgAlDGSMIMsBYCIEAjSok5Mjc9JBEVPCANziZTzhU5ZxgG45xQWHKGA5ZKshWSrMqlWPEYseIBhghlBgJiJmLpPGue6mQ5wJNO6epYZC7sBYTzzRuuuI0hi1pUf6ukrXYnMkcpje07BVDst2pI4i+Uk9lmjHD9qAQPnPZWtK6fNvLhNrTbD2yluELvYXMho7plaxaQFMKl8yGY+CzyRGXW04jLjPabrOVH7PTPeb3rcBKXs81K27YquMt6qePUzG0DgTpDHlmzQMWP8IOQ+U9tpIEUKBYAWnW08sYh5dOnUtz2FECiwFhGtVjSxO6SLTtOT1mWPGKwjmaQt0gTXEhq0wY0Ex4MCrUwxEbTJXdNFY16IMCumIHGTU24yGpQI4XEjAI3HygXwY8GUUxHA5H4SwHgTxXkYMXnALExGEH0gLQGtERzMB6QMvM2lDWFs4x0PCSW5C3jnDs87fjAr7HUesUsbHj8IoyIlkiyJZKk5qkWPBjVWSATQUMF4yo+XTjGEQ4ysALX3zmNO6QK91M5zmsWmq2JxXYUDanTbvMOJ5TXoYRqhAGYy2jOnJ7libeoZCaFfGMNv3Ac+s7rQ+ikoqFVbACTYDCKoAAl9Vkm2ViDlE8411xpNeuL5Jhwo8Tcn8J6OJ5LrH3quNbow/lsJrT3cuIn+LU9kGEApVax3s+z5D/zO9ZrzjPZe1sEP+4/znaUBxmb/AClvRjFISotoGaJmjJl0GLZjgI4CBGUi2ZLaLZgRrH3hKxpBgOkb0QYQY4NAq1KBHC4kAUj3T5HdNP4yN6St4wKaYngwsSfL1kpe+7cIKlAjqJWFO3um2e7h6QNFWjgZnjFlblxbkd6+vDzlpKgNgDwveBMBy9YvlGBvQQ7XE/X6wH/AQH06xpa2Z+vrnK+JxCAd6pb+E5/XWDKYuOsUzG0jh/vKf8t/iReKXllOaPtqJRkgtBDJhRvAYpzetetlLCKV2gahG7l1MsRnYb1XEAZXHWcRrLrG9Vv2XDtvyd+Q4zzDTGtVerUZlqsL8ibWnYanUe0prsjvN7xM7104jzLna0+nS6I0SlNQif5m4k8c50+CwgQZCV9H4PYAWaVMWnG1srWEiryjgYhnDfnMtlPJ9J/3jHUjvZ6oH8iNPVzlPLNKNfH4pDvGIokcMqlLY+c6ae7z8RtH9tH2WVL4Vl+7WYfIzvU3Tyj2YYgpiK+HJyI2rdVNj+E9VQ5TN/k3ozmkDHAQAR6iZdRAjgIhDAUMUEBQWjooDLeUYQeMlIgJ9OZygMBjrgyO6/ZYHnsgv/sBtKeO0rRo/wBpUVOtSpSp/Bm2v9MmRoXI6yKsEtckDqTac1j9daIUigwq1OApJWrf6giovqZzWlf2zEPtGg7iy27lNBuBy7TZNxe1+kk2wYdhidM4dCR2ysRvC94+YEyMXrJTQFqNOoT4BFv127Ab9+U4zG6J0hSvixRNQpTYJT7RWIvfNhfO177K3JsBOD0fp+vVY06tdipVsibAeUvN4zhnE/b2U6+HaWitC9bZQ7O02zY5A7aqwIv8pWxGs2kKlY4emKKVAgYi1VtlTuJcqFv6was6ENKnTd7FhSUDnsj3b+Rm/hkC+8LMd5P5y1t+JamfcuE01/xXatUxNyQTamxU2G+zBQB5mcTi8XVLnaZ7g/bclh5z1vWXHUqaZsDU+yosWIuL5DcOs5TQWrKY7bq1GsTXZbLewUAEt6ZeJE7xqY3ea/DRO0uQGkcR/wBZ/wCZop6gvs4wX3j6j8Yo6rPbfr0qGC8wdadYP2VCEQvVNNmAG4KN7N0znGIy9yHXTWZcJSIUg1WBsOXUzwTS+lXrOWZiSSbnnJtP6aqYhyzMSSc/rlKWAwL1XCIu0xM9VaxSHKZzKTRWCaq6ooJZiJ71qrobsaSrbvWFzMfUnVBcMod+9VIzPAdBO7o0rThe+Wog6mvAxMtpJaKc20cerXgZOMCwH3t4TzHWrAO+l1oUdjbxOGQjbNlHZlmLHick3CdBp3XZadQ4XC0xiMQPe72zRpcL1KmfXui5NjyMWitX62KvUxWKdmZQNmh/y9MC99m6HtGGf2n8pa2xLnqU54w5DQmiquE0iGazUiaimoFNNRfiVfMC4nqOHxCN7rq3gwPynH6V1GwVO/8Ay1JieLIrHzLXJnL6X0IMMO0oA0nVS+yhIRgovsmnewJF7MtiDYzE6mZ8tU04rHh6+JIs43UfWcVMMz4msq9nWqIruyguod1U3JG0bIRfjskyzjvaBgaZsrmo3JASfl+M01l1cInDDXHF1v7vgGA4NU7vwa95Zp09KVvfril0pocum0SB8IHYPlmTYdch8ZXq4+kou1VAPHL13TmU1SZs6uJrMeP9ZsfCmB85bo6n4VTdqaMebjbb1cmBPX1wwSmwrq7cqf8AWH0p7R+EgOtm1/ZYSu/UoEHrVZD8JqU8BRUWCgD0HoLSamtMe6o8bQMMaVx9T3MNSQfv1GqH+Wkg/wB0ZVwWkag72LCf9qioNujVWcg+Fp0fa34E/KG7HhCOU/ogX/tq+Irf93Evb+VLCW8LqphqWa0qQPMIGb+Zs5umkeJ/KDshzv0EKqDC07WD36Xy+AykNWlSB91r8xcfod/wmg1JfPpvkdVkGRAI5AXb+UQjONRM+7fOxsTbzzveZ1PB4GheouFoUyWJL7KDvXzJe2+Q6U0yvadhSw9U1AobZNqY2cwG7xHd/KYOl6gqgDE4jCoqG4UsaxB5lRYX9ZuNOZcba9atHH6/0KVxTbtyP+ihNvFh3flOK03rjisSbBFopzNtv1l+vpnRlIWNWtXP3UHZr5bIHxnC4muGdigIUsdkHMgcATOtdOHm1OJv6dHhtK0KNJl2Wq1qgs7sfgOkzqOn61Ndik5QEk905577nyEp4PRlesbJSZieQM6fQvs6xFY991pgbwc2HivCa/hVzjrXcu+kahNzUYk82MU9PT2U0bZ12v8Aw/rFHVhe1u9FxNcU0LsclFzPLtb8VtE1qVUs9Rdlhe4C8RbgJ3mtWFrVaGxS2b7akhrgFeO7ynGYHViqHYXBVz3jwAz3Tz1fRl5ymh2qMq0lZ3Yi9hkOpM9a1L1QXCoGYA1SMyc7dBN3QuhqdBdlFHjb8Zs06dpbWz4giPs2jStLAEjqVVQXZgo5kgfOZWM1pwtP/FDH92x+O70vOeWsNqKcKdfKlU2w2G2s977TfAAAesDDS2I/xeyTkoC/7fzjI7lzs7yB4kD575zftB0g9DBlkOyalSlS2sxsq7hWYHeDY2B4FhKOC1UxAbbfHVVPNCFPXvZkybFap0WV71Klao9MoTWdqikEglWDHMG2/eN8qOK1Vw5pIo2bMe8/M1D79/A90dFWeh6JFUrcHZHOee1NXsTQJFOvWoW3BwlemOilgCR4sTL1AY4LZtLVAvKnSo0j6nbtOePLWXYU9MYYo+JaraijAF6ytSQki/cNQDbte2XGcLrDpRtINs4ZWp4UkbVdhslwOGHUi5/jOQ6nI3l0TRY9q4fE1Baz4ioa7X35B+4PJRBjapUFmPDde/qeP1vmsJlr6C1EoVaCdslqa27JAxACAWBYjM3uTnvvc5mdDhdAUMMP6rCoOoAv5nfM/wBnWmu1oNRKktRa21zVyzL6bvSdTUqnlLEmFRdrgoHhHhX5geEx9FaVvia+DJuaWw6c9hwCVJ/dJA8COU2vh04yzCROS7Lm1vnD2Q/8wW8o5UPLzMKQReXrCLcvyki4Y/8AmZuP09gqB2a2MpB/ubYZ/Kmt2PpAv7fn8oLk9flMB9c6Tf3fB4qvf7XZ9inmaxVreCmRNpjSVT3aOGwy8S5fEMBzy2FU+N5MjpWQfacDoMz6DMyOtWRF2iLKPtOwpIPEnMek5jReicUzVDicfiChfuLQFKiGvm12VdvedysN01cFq5hqZDjDIzi9qldnxNXPk9Ukj1gUtI674WiqlXXEFmC7OEXtOhJrsRT9SDKeD0ziM1wmApUgxLF8TXNRyx4mmlyf551VfBq42almXkQNn0tIcHg6FE7NGkiE591Qo9QM98o8o9oui9I1Xp1axFUlCn9TSKKo32tcsRv3mc9o3UPG1rEUSFPF7KPjmZ76EZwdobNwLZg2PHIZZc7xqpYdwknmfdPj+Yz5zpGpMRh57cPW1ptPt5bo72TtvrVgOiC59TOm0XqRgsOf7M1nH3rML9R7oPjOuNEn3jfoMh+vnD2YA5CZm8y6V0qV2hRp0iBZVVF5KLn8APQxwoKGDHNhexPC++w3DyktWpbdIadIk3My6LQMUbaCBK+6QpRlj6yiAgJEjXrgeAko+rzPx1O17i6tfwz3iZtssKdHTmFxRqUUqJVKWFRPetfdcHeOsr6L1RwKgv2O2203vsz7PIC55TO0Fq/gsAHaguyWzZmIyUZ2vYZDrNPQ2mqdYPsG4DZHgwIyYdMj6TNSWvQp007qoByyli7HoOZ/KZlOuAwYmwBmp2l9w9ZuEN7EcST47pVxVW52V4byPlLVr9flMXVjGpWoLUuC1rOOIce8COd8/MSzHhM+cK+sOGY4aowBLLssLb8mFz6EzksFpZSMwLz1RAAM7W+t88/1iwFI1TVFXD0htXsbN/pW8xPhrdUbSQOUydKbRGZ2R13nwXjLlHSOCoNtftD1GG4U6SIPVrt6SZtO9q5qUdFM7MSdqoHYePesIyYXdRcUaSsgT3mByzbdbM8f1nbdrVtfYsLfaIUfGcFVx+lSPeoYRPFVt5IPxmNiK1K9sRparVcm2xQ3k8gRcyxWUmYj26TQmijRxNXG4rHUQ9QNdaTEhbm4HaNZTYADMcJvPrro9O6tftW5UEesSfFAQPMzD0Hqfg2AqGjc8TWbtHH8QJIU9N86nB6PpU+6aYUcGA2UPIEfZPjluseE1MzLNYiNmY2ttZ/7DRtTo2IdKI8dldpvlGhtLVt9elh1/wDgo7Tfz1iQfHZnR/s+yboAR90//k8PA+okiVA3Mkb1ta3iPrpI05U6n9r/AHjEV8RfeKtZzT/+tbJ6Camj9XMLRGzToqtuCKq+pH4mbB6nyH1eIDyH15CBSVfupYcyD8B7x8rcudrQpcLWGRtkc+YByEkFh9fMwbZO4eZlDgoGfx/WDb5ep+s4Njic/rgINrln14QGlWJzIK2G8G9872zsOHWEWysNojcTnb/MYiBxN/l6RGsIBKX359OHpx84S0q18aqkAkAm9gSATbkDvmLX0nWdlWmjBSzK9lPap3SQ1mFgLi18wbwNjGY9KYuzBcjvIBNuQ4zGfTVStsmhT26RYBnVk2gp5KTdWFwbMNwk2j9DurOz1WcVALq4GR3XuMt1hkAMppUcEFAUCwAAAHIZAQqjgMKaRe9UurVCyg3ZgCANksxOVwTlbfLTVSdwlpcOI8UxCM7YeGaOzBAjpOb7Le8OWQI4MPy4el5I3EUdoZGzDNTyPUcQeI/QxtCttCx7rA2ZRmQfxHEG0CX6zkGkQ5pVAhs5pVApO4MVOybdDYyfru8YG9flA8i0cGqlUxVJ1ZSAVrPdQw95lBa1QHgTl8p09MJSBKYnDoGsSajktfdmEHLhNfSNGmSQyhhyKhh4Z7pmLoSiT/daQB/d/ATExK+EVHT+ConarY1aj9Eew8AQBJG9oeGbKlTrViPuoLeoLfETTwurGHGYoU16img/C/ymrQ0ZSUZKT4ZD4S4kzDIGsbMt1puG+6KNRv8AU5pL8Zz9Stjxfs+ww1Mkm+yit4tsg55n7U9AGGQfZHgBc/nGYrCI6lWRdgixDAEEciDl6xj9TLyrH1l/9Rpe54qmZ8szMv8A4hotTcjEVyPvXt6EgTutIeznBVCSqPTJ4o9l8lYEDwAAmOfZXh//AHNY9AKXz2Mp0iun7crW1vWGINdcPT/scGq/xbC/7A5mdpPXrEOLCpsDlTXY/wBbFmPlsztMN7McEpvUas/7u3b/AGBSfhOh0dq5hcPnSw1OmfvWDP8AzG5+JmuakbQxyatvlb/HkWB1b0hjbPssqG1nrsyqf4Q12c8ufOdzq3qXQwt+0/r6xAB7tivG6AEEe8udwRcHmZ2aUGU3RcuIb47N93hkPDfLAQMPeJNxnutY3t9Z5zNrzZumlWplNNk3uLbQtsgX5AHKwyyuOQ3S6KosSwNs/C1r3t4cDnKlBABYXHMtv8bcSc9+UfTYXsASbnM7vy48OvHfh1TK2yLqQV+7y/hJ3eBy3bpLsh88wRx3MvT9NxkKi2/P4AcMh4GNqMTuyIsLjeB4cR0gTg7PvWA+9w/zcjHl/r9JCobc/rwP5HpHLhdnccuR3Dw5eEBxcbzG/tBPui/XhIqlZAbX22+6LeZtJChcAglOY4wEQx35/L0h2GkxcAb7kDz9JEldag7jem8cweRlDHUDItmdw4mUhiGchaast7gsyX2WHB0JBA6iWaGAs20zEkHu81vvAbfY8jL0DMw2iu6oqkVGR3KsRnZr9033jO3pyl9KSqLAAAcBJIIAiiJg2oCtAYC0YTAO1FGXigSyHEUjfbXJwLdGX7p/A8D0JBmEMCGjUDDaAtz2t4PEEcDHn1+A/X4yKslj2ii+7aHMfeH7w+Iy5WeGBAO1cEXGzxHPLOBn6Uwm2MmseS/V/PKUcG9SnkygDmd/nw87mbhHIWH1w3CMKDlfqfw/STAgpYpTwJ6nd9eAlkYlT9ryEaaCnf6D6vEMKo3AAQJhVHMAfXlEHHj1MC4ZeVzzMd2K+PSURPUXib9Bu+vGQvXUfkN/14S4aQHSQO4Fwq3NuG88IFf9o5JYczvjO1c+6nm34S1sMSDlkc+PlyHlJwnP4SDPFNzvNzy4en5yZMGxNy1vD5Ey5kI1nOVhkeO/zjACYdRJQnIQKbb98dtcpQ1afEkfXWOXoLCECJgCLHdAr1sUq82Oe4X3Gx6XHLfGinUZrkgKCCLXz6HmI9VSkuQsLk5czvMqLjHqj+rFgHKttXDdGWQWX7KiC2S3N/PdlIGxrVLikONiTvU9VO8HpHU9H3H9YQ5O/keRtwMugW3QKiYEEq7ZOORO/jnxHSW1UDcLQxSg3gvBFAV4CYYIDSY0x8YYAjTCYIAigigTCERohgOlZhsG4yQm5/dJ4+B4yxERAh8M+vD68IfE+Q+ryL3DYnuHd06EydRyFoCUeUcPXxjPjCTzMBxa28wCrcXG68j7AE3+e70ky0wIEfZkk5kj0/Ux60wPrKFnAjNok2sYDywEj7Qk7NiMr3/WI0xlfeDfKPz8IDFS19oggnKSLusBYCEJHWgALHXkNXEKu8yBK7s+zsWXZ39YFtn85QXEvUZk2GUBcm5niJPg8IUuSxJJueV+ktWgV8HSZUCubkAAnrJwtuEdBAUUV4rwFFFFAEUUUBRRRQI2aNjyBGsIDDBDBAEUUUCUQwRQDDFFADqCLGVlOydljfl4dYooEwBPSPVIooCaqBlI22ibZQxQHGmMri5GfnHZnpFFAcFhiigQYnEhBtHhIKdZqhyyQrlziikEyYQWsxv+MsgRRShQxRQBeC8UUBWhtFFAUUUUBRpMUUBpMaWiigC8BMUUAQRRQBFFFA//2Q==\",\n            \"createdAt\": \"2020-10-06T13:04:06.929Z\",\n            \"updatedAt\": \"2020-10-06T14:16:09.342Z\",\n            \"__v\": 0\n        },\n        \"coverImage\": \"data:image/jpeg;base64,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\",\n        \"createdAt\": \"2020-10-07T07:31:19.497Z\",\n        \"updatedAt\": \"2020-10-07T07:31:19.497Z\",\n        \"__v\": 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/hcpGroups/hcpGroup.routes.ts",
    "groupTitle": "HCP_Specialties"
  },
  {
    "type": "get",
    "url": "/hcp-groups/specialties/:groupId/specialties",
    "title": "Get HCP Specialty By GroupID",
    "name": "Get_HCP_Specialty_By_GroupID",
    "description": "<p>Get HCP Specialty By GroupID</p>",
    "group": "HCP_Specialties",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-Response:",
          "content": "   [\n    ,\n    {\n        \"_id\": \"5f7d7fecabe86c2e30e72ff7\",\n        \"name\": \"Dentist\",\n        \"description\": \"Dental health doctor\",\n        \"group\": {\n            \"_id\": \"5f7c6b46337b17397c44ec1b\",\n            \"name\": \"General Medical Practitioners\",\n            \"description\": \"This is test group\",\n            \"coverImage\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQExAVFRIVDw8VFxgVFRUWFRgVFhUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGBAQGy0fHx0tLS0tKy0tLSstLS0tLS0tKy0tLS0tLS0tKy0tLS0tLS0tLS0tLS0rLS0tLS0tLS0rLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIDBAUGBwj/xABGEAACAQICBwUFBQQIBQUAAAABAgADEQQhBQYSMUFRYRMicYGRBzKhsfBCUsHR4RRicpIWIzM0Q4KishUkU3PxRFRjk8L/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAlEQEAAgECBgMAAwAAAAAAAAAAAQIRAzEEEhMUIUEyUWEicZH/2gAMAwEAAhEDEQA/APWFkqyFZMsyqQQiNEcJQit4QghEMBRRRQDFBDAEUMEBRRRQFBDKeP0lSojadwAOZhJnC3GvUA3m0840/wC0+ml1ojbPPhOC0nrljMQbbZAPBJ0rpWl578VSNvL23SWs+Go+/VUec5PSXtSoLcU1Ln0E82w+ruMrd4o2fFpr0PZ9WIuzTfJSN5currW+MYXMf7UMQ3uIFHU3MwMXrpjH31yPDKdRo/2agnvuT0E6XA6gYVPsA+MvPSNoTpatt5eQVdL4l99WofM/hIgK7cHPrPe6Wq2HAsKa+ksU9A0l3IPSOqvafcvn4YDEH/CeTUtB4pt1Iz6COjk+4PSOTBKPsiOrLUcJV4MuqWMP+HD/AEPxn/Tnvgwwj+xXlM9WzUcLR4ImpWLP2ZN/QTFT3M0F5QdgJOrZe2o8MOomJv8ApE2omK8Z7i1EcoOzA4S9WTtqPDV1Oxi7rgxVNVcad5JntzUgeEK4Yco6kr29Xhn9EMZ1+MU90/Z15RR1JO3qspJVkKyVZwehKI4RojhKHCGAQwFFFFAUUUBMB0EUUBRlSoFFybCNxFYICxNgBPINe9eHqsaFBrLmCRxmq0m0uWrqxpx5dFrd7Q6dG9Oj3358BPNK2KxmkKlht1CTuHujxm5qlqFVxRFWtdaZzz95vyE9c0RoajhkCUqYUDkPmZ2zWm27yxp6mt5t4h5fon2Y1CA1d7fur+c6vRmrNDDZrTBPWdm5lTEICJyteZemmjSm0MilVDNs2sBL+yJXp4Qg3tHEEGZdF+koEnBlKniOcs02vCpbR1og0N4AtFaLahAgMMBEewgAlDGSMIMsBYCIEAjSok5Mjc9JBEVPCANziZTzhU5ZxgG45xQWHKGA5ZKshWSrMqlWPEYseIBhghlBgJiJmLpPGue6mQ5wJNO6epYZC7sBYTzzRuuuI0hi1pUf6ukrXYnMkcpje07BVDst2pI4i+Uk9lmjHD9qAQPnPZWtK6fNvLhNrTbD2yluELvYXMho7plaxaQFMKl8yGY+CzyRGXW04jLjPabrOVH7PTPeb3rcBKXs81K27YquMt6qePUzG0DgTpDHlmzQMWP8IOQ+U9tpIEUKBYAWnW08sYh5dOnUtz2FECiwFhGtVjSxO6SLTtOT1mWPGKwjmaQt0gTXEhq0wY0Ex4MCrUwxEbTJXdNFY16IMCumIHGTU24yGpQI4XEjAI3HygXwY8GUUxHA5H4SwHgTxXkYMXnALExGEH0gLQGtERzMB6QMvM2lDWFs4x0PCSW5C3jnDs87fjAr7HUesUsbHj8IoyIlkiyJZKk5qkWPBjVWSATQUMF4yo+XTjGEQ4ysALX3zmNO6QK91M5zmsWmq2JxXYUDanTbvMOJ5TXoYRqhAGYy2jOnJ7libeoZCaFfGMNv3Ac+s7rQ+ikoqFVbACTYDCKoAAl9Vkm2ViDlE8411xpNeuL5Jhwo8Tcn8J6OJ5LrH3quNbow/lsJrT3cuIn+LU9kGEApVax3s+z5D/zO9ZrzjPZe1sEP+4/znaUBxmb/AClvRjFISotoGaJmjJl0GLZjgI4CBGUi2ZLaLZgRrH3hKxpBgOkb0QYQY4NAq1KBHC4kAUj3T5HdNP4yN6St4wKaYngwsSfL1kpe+7cIKlAjqJWFO3um2e7h6QNFWjgZnjFlblxbkd6+vDzlpKgNgDwveBMBy9YvlGBvQQ7XE/X6wH/AQH06xpa2Z+vrnK+JxCAd6pb+E5/XWDKYuOsUzG0jh/vKf8t/iReKXllOaPtqJRkgtBDJhRvAYpzetetlLCKV2gahG7l1MsRnYb1XEAZXHWcRrLrG9Vv2XDtvyd+Q4zzDTGtVerUZlqsL8ibWnYanUe0prsjvN7xM7104jzLna0+nS6I0SlNQif5m4k8c50+CwgQZCV9H4PYAWaVMWnG1srWEiryjgYhnDfnMtlPJ9J/3jHUjvZ6oH8iNPVzlPLNKNfH4pDvGIokcMqlLY+c6ae7z8RtH9tH2WVL4Vl+7WYfIzvU3Tyj2YYgpiK+HJyI2rdVNj+E9VQ5TN/k3ozmkDHAQAR6iZdRAjgIhDAUMUEBQWjooDLeUYQeMlIgJ9OZygMBjrgyO6/ZYHnsgv/sBtKeO0rRo/wBpUVOtSpSp/Bm2v9MmRoXI6yKsEtckDqTac1j9daIUigwq1OApJWrf6giovqZzWlf2zEPtGg7iy27lNBuBy7TZNxe1+kk2wYdhidM4dCR2ysRvC94+YEyMXrJTQFqNOoT4BFv127Ab9+U4zG6J0hSvixRNQpTYJT7RWIvfNhfO177K3JsBOD0fp+vVY06tdipVsibAeUvN4zhnE/b2U6+HaWitC9bZQ7O02zY5A7aqwIv8pWxGs2kKlY4emKKVAgYi1VtlTuJcqFv6was6ENKnTd7FhSUDnsj3b+Rm/hkC+8LMd5P5y1t+JamfcuE01/xXatUxNyQTamxU2G+zBQB5mcTi8XVLnaZ7g/bclh5z1vWXHUqaZsDU+yosWIuL5DcOs5TQWrKY7bq1GsTXZbLewUAEt6ZeJE7xqY3ea/DRO0uQGkcR/wBZ/wCZop6gvs4wX3j6j8Yo6rPbfr0qGC8wdadYP2VCEQvVNNmAG4KN7N0znGIy9yHXTWZcJSIUg1WBsOXUzwTS+lXrOWZiSSbnnJtP6aqYhyzMSSc/rlKWAwL1XCIu0xM9VaxSHKZzKTRWCaq6ooJZiJ71qrobsaSrbvWFzMfUnVBcMod+9VIzPAdBO7o0rThe+Wog6mvAxMtpJaKc20cerXgZOMCwH3t4TzHWrAO+l1oUdjbxOGQjbNlHZlmLHick3CdBp3XZadQ4XC0xiMQPe72zRpcL1KmfXui5NjyMWitX62KvUxWKdmZQNmh/y9MC99m6HtGGf2n8pa2xLnqU54w5DQmiquE0iGazUiaimoFNNRfiVfMC4nqOHxCN7rq3gwPynH6V1GwVO/8Ay1JieLIrHzLXJnL6X0IMMO0oA0nVS+yhIRgovsmnewJF7MtiDYzE6mZ8tU04rHh6+JIs43UfWcVMMz4msq9nWqIruyguod1U3JG0bIRfjskyzjvaBgaZsrmo3JASfl+M01l1cInDDXHF1v7vgGA4NU7vwa95Zp09KVvfril0pocum0SB8IHYPlmTYdch8ZXq4+kou1VAPHL13TmU1SZs6uJrMeP9ZsfCmB85bo6n4VTdqaMebjbb1cmBPX1wwSmwrq7cqf8AWH0p7R+EgOtm1/ZYSu/UoEHrVZD8JqU8BRUWCgD0HoLSamtMe6o8bQMMaVx9T3MNSQfv1GqH+Wkg/wB0ZVwWkag72LCf9qioNujVWcg+Fp0fa34E/KG7HhCOU/ogX/tq+Irf93Evb+VLCW8LqphqWa0qQPMIGb+Zs5umkeJ/KDshzv0EKqDC07WD36Xy+AykNWlSB91r8xcfod/wmg1JfPpvkdVkGRAI5AXb+UQjONRM+7fOxsTbzzveZ1PB4GheouFoUyWJL7KDvXzJe2+Q6U0yvadhSw9U1AobZNqY2cwG7xHd/KYOl6gqgDE4jCoqG4UsaxB5lRYX9ZuNOZcba9atHH6/0KVxTbtyP+ihNvFh3flOK03rjisSbBFopzNtv1l+vpnRlIWNWtXP3UHZr5bIHxnC4muGdigIUsdkHMgcATOtdOHm1OJv6dHhtK0KNJl2Wq1qgs7sfgOkzqOn61Ndik5QEk905577nyEp4PRlesbJSZieQM6fQvs6xFY991pgbwc2HivCa/hVzjrXcu+kahNzUYk82MU9PT2U0bZ12v8Aw/rFHVhe1u9FxNcU0LsclFzPLtb8VtE1qVUs9Rdlhe4C8RbgJ3mtWFrVaGxS2b7akhrgFeO7ynGYHViqHYXBVz3jwAz3Tz1fRl5ymh2qMq0lZ3Yi9hkOpM9a1L1QXCoGYA1SMyc7dBN3QuhqdBdlFHjb8Zs06dpbWz4giPs2jStLAEjqVVQXZgo5kgfOZWM1pwtP/FDH92x+O70vOeWsNqKcKdfKlU2w2G2s977TfAAAesDDS2I/xeyTkoC/7fzjI7lzs7yB4kD575zftB0g9DBlkOyalSlS2sxsq7hWYHeDY2B4FhKOC1UxAbbfHVVPNCFPXvZkybFap0WV71Klao9MoTWdqikEglWDHMG2/eN8qOK1Vw5pIo2bMe8/M1D79/A90dFWeh6JFUrcHZHOee1NXsTQJFOvWoW3BwlemOilgCR4sTL1AY4LZtLVAvKnSo0j6nbtOePLWXYU9MYYo+JaraijAF6ytSQki/cNQDbte2XGcLrDpRtINs4ZWp4UkbVdhslwOGHUi5/jOQ6nI3l0TRY9q4fE1Baz4ioa7X35B+4PJRBjapUFmPDde/qeP1vmsJlr6C1EoVaCdslqa27JAxACAWBYjM3uTnvvc5mdDhdAUMMP6rCoOoAv5nfM/wBnWmu1oNRKktRa21zVyzL6bvSdTUqnlLEmFRdrgoHhHhX5geEx9FaVvia+DJuaWw6c9hwCVJ/dJA8COU2vh04yzCROS7Lm1vnD2Q/8wW8o5UPLzMKQReXrCLcvyki4Y/8AmZuP09gqB2a2MpB/ubYZ/Kmt2PpAv7fn8oLk9flMB9c6Tf3fB4qvf7XZ9inmaxVreCmRNpjSVT3aOGwy8S5fEMBzy2FU+N5MjpWQfacDoMz6DMyOtWRF2iLKPtOwpIPEnMek5jReicUzVDicfiChfuLQFKiGvm12VdvedysN01cFq5hqZDjDIzi9qldnxNXPk9Ukj1gUtI674WiqlXXEFmC7OEXtOhJrsRT9SDKeD0ziM1wmApUgxLF8TXNRyx4mmlyf551VfBq42almXkQNn0tIcHg6FE7NGkiE591Qo9QM98o8o9oui9I1Xp1axFUlCn9TSKKo32tcsRv3mc9o3UPG1rEUSFPF7KPjmZ76EZwdobNwLZg2PHIZZc7xqpYdwknmfdPj+Yz5zpGpMRh57cPW1ptPt5bo72TtvrVgOiC59TOm0XqRgsOf7M1nH3rML9R7oPjOuNEn3jfoMh+vnD2YA5CZm8y6V0qV2hRp0iBZVVF5KLn8APQxwoKGDHNhexPC++w3DyktWpbdIadIk3My6LQMUbaCBK+6QpRlj6yiAgJEjXrgeAko+rzPx1O17i6tfwz3iZtssKdHTmFxRqUUqJVKWFRPetfdcHeOsr6L1RwKgv2O2203vsz7PIC55TO0Fq/gsAHaguyWzZmIyUZ2vYZDrNPQ2mqdYPsG4DZHgwIyYdMj6TNSWvQp007qoByyli7HoOZ/KZlOuAwYmwBmp2l9w9ZuEN7EcST47pVxVW52V4byPlLVr9flMXVjGpWoLUuC1rOOIce8COd8/MSzHhM+cK+sOGY4aowBLLssLb8mFz6EzksFpZSMwLz1RAAM7W+t88/1iwFI1TVFXD0htXsbN/pW8xPhrdUbSQOUydKbRGZ2R13nwXjLlHSOCoNtftD1GG4U6SIPVrt6SZtO9q5qUdFM7MSdqoHYePesIyYXdRcUaSsgT3mByzbdbM8f1nbdrVtfYsLfaIUfGcFVx+lSPeoYRPFVt5IPxmNiK1K9sRparVcm2xQ3k8gRcyxWUmYj26TQmijRxNXG4rHUQ9QNdaTEhbm4HaNZTYADMcJvPrro9O6tftW5UEesSfFAQPMzD0Hqfg2AqGjc8TWbtHH8QJIU9N86nB6PpU+6aYUcGA2UPIEfZPjluseE1MzLNYiNmY2ttZ/7DRtTo2IdKI8dldpvlGhtLVt9elh1/wDgo7Tfz1iQfHZnR/s+yboAR90//k8PA+okiVA3Mkb1ta3iPrpI05U6n9r/AHjEV8RfeKtZzT/+tbJ6Camj9XMLRGzToqtuCKq+pH4mbB6nyH1eIDyH15CBSVfupYcyD8B7x8rcudrQpcLWGRtkc+YByEkFh9fMwbZO4eZlDgoGfx/WDb5ep+s4Njic/rgINrln14QGlWJzIK2G8G9872zsOHWEWysNojcTnb/MYiBxN/l6RGsIBKX359OHpx84S0q18aqkAkAm9gSATbkDvmLX0nWdlWmjBSzK9lPap3SQ1mFgLi18wbwNjGY9KYuzBcjvIBNuQ4zGfTVStsmhT26RYBnVk2gp5KTdWFwbMNwk2j9DurOz1WcVALq4GR3XuMt1hkAMppUcEFAUCwAAAHIZAQqjgMKaRe9UurVCyg3ZgCANksxOVwTlbfLTVSdwlpcOI8UxCM7YeGaOzBAjpOb7Le8OWQI4MPy4el5I3EUdoZGzDNTyPUcQeI/QxtCttCx7rA2ZRmQfxHEG0CX6zkGkQ5pVAhs5pVApO4MVOybdDYyfru8YG9flA8i0cGqlUxVJ1ZSAVrPdQw95lBa1QHgTl8p09MJSBKYnDoGsSajktfdmEHLhNfSNGmSQyhhyKhh4Z7pmLoSiT/daQB/d/ATExK+EVHT+ConarY1aj9Eew8AQBJG9oeGbKlTrViPuoLeoLfETTwurGHGYoU16img/C/ymrQ0ZSUZKT4ZD4S4kzDIGsbMt1puG+6KNRv8AU5pL8Zz9Stjxfs+ww1Mkm+yit4tsg55n7U9AGGQfZHgBc/nGYrCI6lWRdgixDAEEciDl6xj9TLyrH1l/9Rpe54qmZ8szMv8A4hotTcjEVyPvXt6EgTutIeznBVCSqPTJ4o9l8lYEDwAAmOfZXh//AHNY9AKXz2Mp0iun7crW1vWGINdcPT/scGq/xbC/7A5mdpPXrEOLCpsDlTXY/wBbFmPlsztMN7McEpvUas/7u3b/AGBSfhOh0dq5hcPnSw1OmfvWDP8AzG5+JmuakbQxyatvlb/HkWB1b0hjbPssqG1nrsyqf4Q12c8ufOdzq3qXQwt+0/r6xAB7tivG6AEEe8udwRcHmZ2aUGU3RcuIb47N93hkPDfLAQMPeJNxnutY3t9Z5zNrzZumlWplNNk3uLbQtsgX5AHKwyyuOQ3S6KosSwNs/C1r3t4cDnKlBABYXHMtv8bcSc9+UfTYXsASbnM7vy48OvHfh1TK2yLqQV+7y/hJ3eBy3bpLsh88wRx3MvT9NxkKi2/P4AcMh4GNqMTuyIsLjeB4cR0gTg7PvWA+9w/zcjHl/r9JCobc/rwP5HpHLhdnccuR3Dw5eEBxcbzG/tBPui/XhIqlZAbX22+6LeZtJChcAglOY4wEQx35/L0h2GkxcAb7kDz9JEldag7jem8cweRlDHUDItmdw4mUhiGchaast7gsyX2WHB0JBA6iWaGAs20zEkHu81vvAbfY8jL0DMw2iu6oqkVGR3KsRnZr9033jO3pyl9KSqLAAAcBJIIAiiJg2oCtAYC0YTAO1FGXigSyHEUjfbXJwLdGX7p/A8D0JBmEMCGjUDDaAtz2t4PEEcDHn1+A/X4yKslj2ii+7aHMfeH7w+Iy5WeGBAO1cEXGzxHPLOBn6Uwm2MmseS/V/PKUcG9SnkygDmd/nw87mbhHIWH1w3CMKDlfqfw/STAgpYpTwJ6nd9eAlkYlT9ryEaaCnf6D6vEMKo3AAQJhVHMAfXlEHHj1MC4ZeVzzMd2K+PSURPUXib9Bu+vGQvXUfkN/14S4aQHSQO4Fwq3NuG88IFf9o5JYczvjO1c+6nm34S1sMSDlkc+PlyHlJwnP4SDPFNzvNzy4en5yZMGxNy1vD5Ey5kI1nOVhkeO/zjACYdRJQnIQKbb98dtcpQ1afEkfXWOXoLCECJgCLHdAr1sUq82Oe4X3Gx6XHLfGinUZrkgKCCLXz6HmI9VSkuQsLk5czvMqLjHqj+rFgHKttXDdGWQWX7KiC2S3N/PdlIGxrVLikONiTvU9VO8HpHU9H3H9YQ5O/keRtwMugW3QKiYEEq7ZOORO/jnxHSW1UDcLQxSg3gvBFAV4CYYIDSY0x8YYAjTCYIAigigTCERohgOlZhsG4yQm5/dJ4+B4yxERAh8M+vD68IfE+Q+ryL3DYnuHd06EydRyFoCUeUcPXxjPjCTzMBxa28wCrcXG68j7AE3+e70ky0wIEfZkk5kj0/Ux60wPrKFnAjNok2sYDywEj7Qk7NiMr3/WI0xlfeDfKPz8IDFS19oggnKSLusBYCEJHWgALHXkNXEKu8yBK7s+zsWXZ39YFtn85QXEvUZk2GUBcm5niJPg8IUuSxJJueV+ktWgV8HSZUCubkAAnrJwtuEdBAUUV4rwFFFFAEUUUBRRRQI2aNjyBGsIDDBDBAEUUUCUQwRQDDFFADqCLGVlOydljfl4dYooEwBPSPVIooCaqBlI22ibZQxQHGmMri5GfnHZnpFFAcFhiigQYnEhBtHhIKdZqhyyQrlziikEyYQWsxv+MsgRRShQxRQBeC8UUBWhtFFAUUUUBRpMUUBpMaWiigC8BMUUAQRRQBFFFA//2Q==\",\n            \"createdAt\": \"2020-10-06T13:04:06.929Z\",\n            \"updatedAt\": \"2020-10-06T14:16:09.342Z\",\n            \"__v\": 0\n        },\n        \"coverImage\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQExAVFRIVDw8VFxgVFRUWFRgVFhUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGBAQGy0fHx0tLS0tKy0tLSstLS0tLS0tKy0tLS0tLS0tKy0tLS0tLS0tLS0tLS0rLS0tLS0tLS0rLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIDBAUGBwj/xABGEAACAQICBwUFBQQIBQUAAAABAgADEQQhBQYSMUFRYRMicYGRBzKhsfBCUsHR4RRicpIWIzM0Q4KishUkU3PxRFRjk8L/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAlEQEAAgECBgMAAwAAAAAAAAAAAQIRAzEEEhMUIUEyUWEicZH/2gAMAwEAAhEDEQA/APWFkqyFZMsyqQQiNEcJQit4QghEMBRRRQDFBDAEUMEBRRRQFBDKeP0lSojadwAOZhJnC3GvUA3m0840/wC0+ml1ojbPPhOC0nrljMQbbZAPBJ0rpWl578VSNvL23SWs+Go+/VUec5PSXtSoLcU1Ln0E82w+ruMrd4o2fFpr0PZ9WIuzTfJSN5currW+MYXMf7UMQ3uIFHU3MwMXrpjH31yPDKdRo/2agnvuT0E6XA6gYVPsA+MvPSNoTpatt5eQVdL4l99WofM/hIgK7cHPrPe6Wq2HAsKa+ksU9A0l3IPSOqvafcvn4YDEH/CeTUtB4pt1Iz6COjk+4PSOTBKPsiOrLUcJV4MuqWMP+HD/AEPxn/Tnvgwwj+xXlM9WzUcLR4ImpWLP2ZN/QTFT3M0F5QdgJOrZe2o8MOomJv8ApE2omK8Z7i1EcoOzA4S9WTtqPDV1Oxi7rgxVNVcad5JntzUgeEK4Yco6kr29Xhn9EMZ1+MU90/Z15RR1JO3qspJVkKyVZwehKI4RojhKHCGAQwFFFFAUUUBMB0EUUBRlSoFFybCNxFYICxNgBPINe9eHqsaFBrLmCRxmq0m0uWrqxpx5dFrd7Q6dG9Oj3358BPNK2KxmkKlht1CTuHujxm5qlqFVxRFWtdaZzz95vyE9c0RoajhkCUqYUDkPmZ2zWm27yxp6mt5t4h5fon2Y1CA1d7fur+c6vRmrNDDZrTBPWdm5lTEICJyteZemmjSm0MilVDNs2sBL+yJXp4Qg3tHEEGZdF+koEnBlKniOcs02vCpbR1og0N4AtFaLahAgMMBEewgAlDGSMIMsBYCIEAjSok5Mjc9JBEVPCANziZTzhU5ZxgG45xQWHKGA5ZKshWSrMqlWPEYseIBhghlBgJiJmLpPGue6mQ5wJNO6epYZC7sBYTzzRuuuI0hi1pUf6ukrXYnMkcpje07BVDst2pI4i+Uk9lmjHD9qAQPnPZWtK6fNvLhNrTbD2yluELvYXMho7plaxaQFMKl8yGY+CzyRGXW04jLjPabrOVH7PTPeb3rcBKXs81K27YquMt6qePUzG0DgTpDHlmzQMWP8IOQ+U9tpIEUKBYAWnW08sYh5dOnUtz2FECiwFhGtVjSxO6SLTtOT1mWPGKwjmaQt0gTXEhq0wY0Ex4MCrUwxEbTJXdNFY16IMCumIHGTU24yGpQI4XEjAI3HygXwY8GUUxHA5H4SwHgTxXkYMXnALExGEH0gLQGtERzMB6QMvM2lDWFs4x0PCSW5C3jnDs87fjAr7HUesUsbHj8IoyIlkiyJZKk5qkWPBjVWSATQUMF4yo+XTjGEQ4ysALX3zmNO6QK91M5zmsWmq2JxXYUDanTbvMOJ5TXoYRqhAGYy2jOnJ7libeoZCaFfGMNv3Ac+s7rQ+ikoqFVbACTYDCKoAAl9Vkm2ViDlE8411xpNeuL5Jhwo8Tcn8J6OJ5LrH3quNbow/lsJrT3cuIn+LU9kGEApVax3s+z5D/zO9ZrzjPZe1sEP+4/znaUBxmb/AClvRjFISotoGaJmjJl0GLZjgI4CBGUi2ZLaLZgRrH3hKxpBgOkb0QYQY4NAq1KBHC4kAUj3T5HdNP4yN6St4wKaYngwsSfL1kpe+7cIKlAjqJWFO3um2e7h6QNFWjgZnjFlblxbkd6+vDzlpKgNgDwveBMBy9YvlGBvQQ7XE/X6wH/AQH06xpa2Z+vrnK+JxCAd6pb+E5/XWDKYuOsUzG0jh/vKf8t/iReKXllOaPtqJRkgtBDJhRvAYpzetetlLCKV2gahG7l1MsRnYb1XEAZXHWcRrLrG9Vv2XDtvyd+Q4zzDTGtVerUZlqsL8ibWnYanUe0prsjvN7xM7104jzLna0+nS6I0SlNQif5m4k8c50+CwgQZCV9H4PYAWaVMWnG1srWEiryjgYhnDfnMtlPJ9J/3jHUjvZ6oH8iNPVzlPLNKNfH4pDvGIokcMqlLY+c6ae7z8RtH9tH2WVL4Vl+7WYfIzvU3Tyj2YYgpiK+HJyI2rdVNj+E9VQ5TN/k3ozmkDHAQAR6iZdRAjgIhDAUMUEBQWjooDLeUYQeMlIgJ9OZygMBjrgyO6/ZYHnsgv/sBtKeO0rRo/wBpUVOtSpSp/Bm2v9MmRoXI6yKsEtckDqTac1j9daIUigwq1OApJWrf6giovqZzWlf2zEPtGg7iy27lNBuBy7TZNxe1+kk2wYdhidM4dCR2ysRvC94+YEyMXrJTQFqNOoT4BFv127Ab9+U4zG6J0hSvixRNQpTYJT7RWIvfNhfO177K3JsBOD0fp+vVY06tdipVsibAeUvN4zhnE/b2U6+HaWitC9bZQ7O02zY5A7aqwIv8pWxGs2kKlY4emKKVAgYi1VtlTuJcqFv6was6ENKnTd7FhSUDnsj3b+Rm/hkC+8LMd5P5y1t+JamfcuE01/xXatUxNyQTamxU2G+zBQB5mcTi8XVLnaZ7g/bclh5z1vWXHUqaZsDU+yosWIuL5DcOs5TQWrKY7bq1GsTXZbLewUAEt6ZeJE7xqY3ea/DRO0uQGkcR/wBZ/wCZop6gvs4wX3j6j8Yo6rPbfr0qGC8wdadYP2VCEQvVNNmAG4KN7N0znGIy9yHXTWZcJSIUg1WBsOXUzwTS+lXrOWZiSSbnnJtP6aqYhyzMSSc/rlKWAwL1XCIu0xM9VaxSHKZzKTRWCaq6ooJZiJ71qrobsaSrbvWFzMfUnVBcMod+9VIzPAdBO7o0rThe+Wog6mvAxMtpJaKc20cerXgZOMCwH3t4TzHWrAO+l1oUdjbxOGQjbNlHZlmLHick3CdBp3XZadQ4XC0xiMQPe72zRpcL1KmfXui5NjyMWitX62KvUxWKdmZQNmh/y9MC99m6HtGGf2n8pa2xLnqU54w5DQmiquE0iGazUiaimoFNNRfiVfMC4nqOHxCN7rq3gwPynH6V1GwVO/8Ay1JieLIrHzLXJnL6X0IMMO0oA0nVS+yhIRgovsmnewJF7MtiDYzE6mZ8tU04rHh6+JIs43UfWcVMMz4msq9nWqIruyguod1U3JG0bIRfjskyzjvaBgaZsrmo3JASfl+M01l1cInDDXHF1v7vgGA4NU7vwa95Zp09KVvfril0pocum0SB8IHYPlmTYdch8ZXq4+kou1VAPHL13TmU1SZs6uJrMeP9ZsfCmB85bo6n4VTdqaMebjbb1cmBPX1wwSmwrq7cqf8AWH0p7R+EgOtm1/ZYSu/UoEHrVZD8JqU8BRUWCgD0HoLSamtMe6o8bQMMaVx9T3MNSQfv1GqH+Wkg/wB0ZVwWkag72LCf9qioNujVWcg+Fp0fa34E/KG7HhCOU/ogX/tq+Irf93Evb+VLCW8LqphqWa0qQPMIGb+Zs5umkeJ/KDshzv0EKqDC07WD36Xy+AykNWlSB91r8xcfod/wmg1JfPpvkdVkGRAI5AXb+UQjONRM+7fOxsTbzzveZ1PB4GheouFoUyWJL7KDvXzJe2+Q6U0yvadhSw9U1AobZNqY2cwG7xHd/KYOl6gqgDE4jCoqG4UsaxB5lRYX9ZuNOZcba9atHH6/0KVxTbtyP+ihNvFh3flOK03rjisSbBFopzNtv1l+vpnRlIWNWtXP3UHZr5bIHxnC4muGdigIUsdkHMgcATOtdOHm1OJv6dHhtK0KNJl2Wq1qgs7sfgOkzqOn61Ndik5QEk905577nyEp4PRlesbJSZieQM6fQvs6xFY991pgbwc2HivCa/hVzjrXcu+kahNzUYk82MU9PT2U0bZ12v8Aw/rFHVhe1u9FxNcU0LsclFzPLtb8VtE1qVUs9Rdlhe4C8RbgJ3mtWFrVaGxS2b7akhrgFeO7ynGYHViqHYXBVz3jwAz3Tz1fRl5ymh2qMq0lZ3Yi9hkOpM9a1L1QXCoGYA1SMyc7dBN3QuhqdBdlFHjb8Zs06dpbWz4giPs2jStLAEjqVVQXZgo5kgfOZWM1pwtP/FDH92x+O70vOeWsNqKcKdfKlU2w2G2s977TfAAAesDDS2I/xeyTkoC/7fzjI7lzs7yB4kD575zftB0g9DBlkOyalSlS2sxsq7hWYHeDY2B4FhKOC1UxAbbfHVVPNCFPXvZkybFap0WV71Klao9MoTWdqikEglWDHMG2/eN8qOK1Vw5pIo2bMe8/M1D79/A90dFWeh6JFUrcHZHOee1NXsTQJFOvWoW3BwlemOilgCR4sTL1AY4LZtLVAvKnSo0j6nbtOePLWXYU9MYYo+JaraijAF6ytSQki/cNQDbte2XGcLrDpRtINs4ZWp4UkbVdhslwOGHUi5/jOQ6nI3l0TRY9q4fE1Baz4ioa7X35B+4PJRBjapUFmPDde/qeP1vmsJlr6C1EoVaCdslqa27JAxACAWBYjM3uTnvvc5mdDhdAUMMP6rCoOoAv5nfM/wBnWmu1oNRKktRa21zVyzL6bvSdTUqnlLEmFRdrgoHhHhX5geEx9FaVvia+DJuaWw6c9hwCVJ/dJA8COU2vh04yzCROS7Lm1vnD2Q/8wW8o5UPLzMKQReXrCLcvyki4Y/8AmZuP09gqB2a2MpB/ubYZ/Kmt2PpAv7fn8oLk9flMB9c6Tf3fB4qvf7XZ9inmaxVreCmRNpjSVT3aOGwy8S5fEMBzy2FU+N5MjpWQfacDoMz6DMyOtWRF2iLKPtOwpIPEnMek5jReicUzVDicfiChfuLQFKiGvm12VdvedysN01cFq5hqZDjDIzi9qldnxNXPk9Ukj1gUtI674WiqlXXEFmC7OEXtOhJrsRT9SDKeD0ziM1wmApUgxLF8TXNRyx4mmlyf551VfBq42almXkQNn0tIcHg6FE7NGkiE591Qo9QM98o8o9oui9I1Xp1axFUlCn9TSKKo32tcsRv3mc9o3UPG1rEUSFPF7KPjmZ76EZwdobNwLZg2PHIZZc7xqpYdwknmfdPj+Yz5zpGpMRh57cPW1ptPt5bo72TtvrVgOiC59TOm0XqRgsOf7M1nH3rML9R7oPjOuNEn3jfoMh+vnD2YA5CZm8y6V0qV2hRp0iBZVVF5KLn8APQxwoKGDHNhexPC++w3DyktWpbdIadIk3My6LQMUbaCBK+6QpRlj6yiAgJEjXrgeAko+rzPx1O17i6tfwz3iZtssKdHTmFxRqUUqJVKWFRPetfdcHeOsr6L1RwKgv2O2203vsz7PIC55TO0Fq/gsAHaguyWzZmIyUZ2vYZDrNPQ2mqdYPsG4DZHgwIyYdMj6TNSWvQp007qoByyli7HoOZ/KZlOuAwYmwBmp2l9w9ZuEN7EcST47pVxVW52V4byPlLVr9flMXVjGpWoLUuC1rOOIce8COd8/MSzHhM+cK+sOGY4aowBLLssLb8mFz6EzksFpZSMwLz1RAAM7W+t88/1iwFI1TVFXD0htXsbN/pW8xPhrdUbSQOUydKbRGZ2R13nwXjLlHSOCoNtftD1GG4U6SIPVrt6SZtO9q5qUdFM7MSdqoHYePesIyYXdRcUaSsgT3mByzbdbM8f1nbdrVtfYsLfaIUfGcFVx+lSPeoYRPFVt5IPxmNiK1K9sRparVcm2xQ3k8gRcyxWUmYj26TQmijRxNXG4rHUQ9QNdaTEhbm4HaNZTYADMcJvPrro9O6tftW5UEesSfFAQPMzD0Hqfg2AqGjc8TWbtHH8QJIU9N86nB6PpU+6aYUcGA2UPIEfZPjluseE1MzLNYiNmY2ttZ/7DRtTo2IdKI8dldpvlGhtLVt9elh1/wDgo7Tfz1iQfHZnR/s+yboAR90//k8PA+okiVA3Mkb1ta3iPrpI05U6n9r/AHjEV8RfeKtZzT/+tbJ6Camj9XMLRGzToqtuCKq+pH4mbB6nyH1eIDyH15CBSVfupYcyD8B7x8rcudrQpcLWGRtkc+YByEkFh9fMwbZO4eZlDgoGfx/WDb5ep+s4Njic/rgINrln14QGlWJzIK2G8G9872zsOHWEWysNojcTnb/MYiBxN/l6RGsIBKX359OHpx84S0q18aqkAkAm9gSATbkDvmLX0nWdlWmjBSzK9lPap3SQ1mFgLi18wbwNjGY9KYuzBcjvIBNuQ4zGfTVStsmhT26RYBnVk2gp5KTdWFwbMNwk2j9DurOz1WcVALq4GR3XuMt1hkAMppUcEFAUCwAAAHIZAQqjgMKaRe9UurVCyg3ZgCANksxOVwTlbfLTVSdwlpcOI8UxCM7YeGaOzBAjpOb7Le8OWQI4MPy4el5I3EUdoZGzDNTyPUcQeI/QxtCttCx7rA2ZRmQfxHEG0CX6zkGkQ5pVAhs5pVApO4MVOybdDYyfru8YG9flA8i0cGqlUxVJ1ZSAVrPdQw95lBa1QHgTl8p09MJSBKYnDoGsSajktfdmEHLhNfSNGmSQyhhyKhh4Z7pmLoSiT/daQB/d/ATExK+EVHT+ConarY1aj9Eew8AQBJG9oeGbKlTrViPuoLeoLfETTwurGHGYoU16img/C/ymrQ0ZSUZKT4ZD4S4kzDIGsbMt1puG+6KNRv8AU5pL8Zz9Stjxfs+ww1Mkm+yit4tsg55n7U9AGGQfZHgBc/nGYrCI6lWRdgixDAEEciDl6xj9TLyrH1l/9Rpe54qmZ8szMv8A4hotTcjEVyPvXt6EgTutIeznBVCSqPTJ4o9l8lYEDwAAmOfZXh//AHNY9AKXz2Mp0iun7crW1vWGINdcPT/scGq/xbC/7A5mdpPXrEOLCpsDlTXY/wBbFmPlsztMN7McEpvUas/7u3b/AGBSfhOh0dq5hcPnSw1OmfvWDP8AzG5+JmuakbQxyatvlb/HkWB1b0hjbPssqG1nrsyqf4Q12c8ufOdzq3qXQwt+0/r6xAB7tivG6AEEe8udwRcHmZ2aUGU3RcuIb47N93hkPDfLAQMPeJNxnutY3t9Z5zNrzZumlWplNNk3uLbQtsgX5AHKwyyuOQ3S6KosSwNs/C1r3t4cDnKlBABYXHMtv8bcSc9+UfTYXsASbnM7vy48OvHfh1TK2yLqQV+7y/hJ3eBy3bpLsh88wRx3MvT9NxkKi2/P4AcMh4GNqMTuyIsLjeB4cR0gTg7PvWA+9w/zcjHl/r9JCobc/rwP5HpHLhdnccuR3Dw5eEBxcbzG/tBPui/XhIqlZAbX22+6LeZtJChcAglOY4wEQx35/L0h2GkxcAb7kDz9JEldag7jem8cweRlDHUDItmdw4mUhiGchaast7gsyX2WHB0JBA6iWaGAs20zEkHu81vvAbfY8jL0DMw2iu6oqkVGR3KsRnZr9033jO3pyl9KSqLAAAcBJIIAiiJg2oCtAYC0YTAO1FGXigSyHEUjfbXJwLdGX7p/A8D0JBmEMCGjUDDaAtz2t4PEEcDHn1+A/X4yKslj2ii+7aHMfeH7w+Iy5WeGBAO1cEXGzxHPLOBn6Uwm2MmseS/V/PKUcG9SnkygDmd/nw87mbhHIWH1w3CMKDlfqfw/STAgpYpTwJ6nd9eAlkYlT9ryEaaCnf6D6vEMKo3AAQJhVHMAfXlEHHj1MC4ZeVzzMd2K+PSURPUXib9Bu+vGQvXUfkN/14S4aQHSQO4Fwq3NuG88IFf9o5JYczvjO1c+6nm34S1sMSDlkc+PlyHlJwnP4SDPFNzvNzy4en5yZMGxNy1vD5Ey5kI1nOVhkeO/zjACYdRJQnIQKbb98dtcpQ1afEkfXWOXoLCECJgCLHdAr1sUq82Oe4X3Gx6XHLfGinUZrkgKCCLXz6HmI9VSkuQsLk5czvMqLjHqj+rFgHKttXDdGWQWX7KiC2S3N/PdlIGxrVLikONiTvU9VO8HpHU9H3H9YQ5O/keRtwMugW3QKiYEEq7ZOORO/jnxHSW1UDcLQxSg3gvBFAV4CYYIDSY0x8YYAjTCYIAigigTCERohgOlZhsG4yQm5/dJ4+B4yxERAh8M+vD68IfE+Q+ryL3DYnuHd06EydRyFoCUeUcPXxjPjCTzMBxa28wCrcXG68j7AE3+e70ky0wIEfZkk5kj0/Ux60wPrKFnAjNok2sYDywEj7Qk7NiMr3/WI0xlfeDfKPz8IDFS19oggnKSLusBYCEJHWgALHXkNXEKu8yBK7s+zsWXZ39YFtn85QXEvUZk2GUBcm5niJPg8IUuSxJJueV+ktWgV8HSZUCubkAAnrJwtuEdBAUUV4rwFFFFAEUUUBRRRQI2aNjyBGsIDDBDBAEUUUCUQwRQDDFFADqCLGVlOydljfl4dYooEwBPSPVIooCaqBlI22ibZQxQHGmMri5GfnHZnpFFAcFhiigQYnEhBtHhIKdZqhyyQrlziikEyYQWsxv+MsgRRShQxRQBeC8UUBWhtFFAUUUUBRpMUUBpMaWiigC8BMUUAQRRQBFFFA//2Q==\",\n        \"createdAt\": \"2020-10-07T08:44:28.612Z\",\n        \"updatedAt\": \"2020-10-07T08:44:28.612Z\",\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"5f7d8033abe86c2e30e72ff8\",\n        \"name\": \"Mental Health Specialists\",\n        \"description\": \"Mental health doctor\",\n        \"group\": {\n            \"_id\": \"5f7c6b46337b17397c44ec1b\",\n            \"name\": \"General Medical Practitioners\",\n            \"description\": \"This is test group\",\n            \"coverImage\": \"data:image/jpeg;base64,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\",\n            \"createdAt\": \"2020-10-06T13:04:06.929Z\",\n            \"updatedAt\": \"2020-10-06T14:16:09.342Z\",\n            \"__v\": 0\n        },\n        \"coverImage\": \"data:image/jpeg;base64,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\",\n        \"createdAt\": \"2020-10-07T08:45:39.587Z\",\n        \"updatedAt\": \"2020-10-07T08:45:39.587Z\",\n        \"__v\": 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/hcpGroups/hcpGroup.routes.ts",
    "groupTitle": "HCP_Specialties"
  },
  {
    "type": "get",
    "url": "/hcp-groups/specialties/:id",
    "title": "Get HCP Specialty By ID",
    "name": "Get_HCP_Specialty_By_ID",
    "description": "<p>Get HCP Specialty By ID</p>",
    "group": "HCP_Specialties",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-Response:",
          "content": "[\n    {\n        \"_id\": \"5f7d6ec7ac612a2c204c185a\",\n        \"name\": \"Nurse\",\n        \"description\": \"Responsible for providing assistance to doctors\",\n        \"group\": {\n            \"_id\": \"5f7c6b46337b17397c44ec1b\",\n            \"name\": \"General Medical Practitioners\",\n            \"description\": \"This is test group\",\n            \"coverImage\": \"data:image/jpeg;base64,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\",\n            \"createdAt\": \"2020-10-06T13:04:06.929Z\",\n            \"updatedAt\": \"2020-10-06T14:16:09.342Z\",\n            \"__v\": 0\n        },\n        \"coverImage\": \"data:image/jpeg;base64,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\",\n        \"createdAt\": \"2020-10-07T07:31:19.497Z\",\n        \"updatedAt\": \"2020-10-07T07:31:19.497Z\",\n        \"__v\": 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/hcpGroups/hcpGroup.routes.ts",
    "groupTitle": "HCP_Specialties"
  },
  {
    "type": "patch",
    "url": "/hcp-groups/specialties/:id",
    "title": "Update Health Care Provider Specialty",
    "name": "UpdateHCPSpecialty",
    "description": "<p>Update Health Care Provider Specialty</p>",
    "group": "HCP_Specialties",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT authentication token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>HCP Specialty Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descriptions of HCP Specialty.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "coverImage",
            "description": "<p>Image of the HCP group.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-Response:",
          "content": "    {\n    \"_id\": \"5f7d666cef480e22ccdc7e6d\",\n    \"name\": \"Nurse\",\n    \"description\": \"Responsible for providing assistance to doctors\",\n    \"group\": \"5f7c6b46337b17397c44ec1b\",\n    \"coverImage\": \"data:image/jpeg;base64,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\",\n    \"createdAt\": \"2020-10-07T06:55:40.060Z\",\n    \"updatedAt\": \"2020-10-07T07:10:40.790Z\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/modules/hcpGroups/hcpGroup.routes.ts",
    "groupTitle": "HCP_Specialties"
  }
] });
