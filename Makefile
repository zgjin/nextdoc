# 这里假定 git 上项目名就是服务名，如果出现了例外，记得修改 git 项目名，而不要在这里修改。
# 仅当项目初始化还未上传 git 时可以临时的手动设置 PACKAGE_NAME 值，绕过各种检查。

# 项目名称
SUB_PACKAGE  := $(subst $(shell git rev-parse --show-toplevel),,$(CURDIR))
PACKAGE_ROOT := $(shell git remote -v | grep '^origin\s.*(fetch)$$' | awk '{print $$2}' | sed -E 's/^.*(\/\/|@)(.*)\.git\/?$$/\2/' | sed 's/:/\//g')
PACKAGE_NAME = $(PACKAGE_ROOT)$(SUB_PACKAGE)

# 项目所在根目录，一般是risk-system
APP_ROOT := $(shell dirname $(PACKAGE_NAME))
# go build 生成的文件名
APP      := $(shell basename $(PACKAGE_NAME))
# 组织名称
GROUP    := $(shell dirname $(APP_ROOT))

OUTPUT     = $(CURDIR)/output

HARBOR      := registry.sensetime.com
HARBOR_REPO := $(HARBOR)/nebula
IMAGE_REPO  := $(HARBOR_REPO)/nebula-openapi
VERSION			:= 0.0.1
BRANCH			:= $(shell git rev-parse --abbrev-ref HEAD)
COMMIT			:= $(shell git rev-parse --short HEAD)
IMAGE := $(IMAGE_REPO):$(VERSION)-$(BRANCH)-$(COMMIT)

# TODO
image:

.PHONY:	image