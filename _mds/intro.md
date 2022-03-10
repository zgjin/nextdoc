## Button 按钮
常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo Button 组件默认提供7种主题，由`type`属性来定义，默认为`default`。

```js
render() {
  return (
    <div>
      <Button>默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="text">文字按钮</Button>
    </div>
  )
}
```
:::

### 禁用状态

按钮不可用状态。

:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```js
render() {
  return (
    <div>
      <Button plain={true} disabled={true}>默认按钮</Button>
      <Button type="primary" disabled={true}>主要按钮</Button>
      <Button type="text" disabled={true}>文字按钮</Button>
    </div>
  )
}
```
:::

### 有颜色倾向

不同的颜色倾向代表不同的提示

:::demo 朴素按钮同样设置了不同的`type`属性对应的样式（可选值同上），默认为`info`。设置`plain`属性，它接受一个`Boolean`。注意，在该情况下，`type`虽然可以为`text`，但是是没有意义的，会显示为`text button`的样式。

```js
render() {
  return (
    <div className="intro-block">
      <div className="block">
        <span className="demonstration">默认显示颜色</span>
        <span className="wrapper">
          <Button type="success">成功按钮</Button>
          <Button type="warning">警告按钮</Button>
          <Button type="danger">危险按钮</Button>
          <Button type="info">信息按钮</Button>
        </span>
      </div>
      <div className="block">
        <span className="demonstration">hover 显示颜色</span>
        <span className="wrapper">
          <Button plain={true} type="success">成功按钮</Button>
          <Button plain={true} type="warning">警告按钮</Button>
          <Button plain={true} type="danger">危险按钮</Button>
          <Button plain={true} type="info">信息按钮</Button>
        </span>
      </div>
    </div>
  )
}
```
:::

### 图标按钮

带图标的按钮可增强辨识度(有文字)或节省空间(无文字)。

:::demo 设置`icon`属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用`i`标签即可，可以使用自定义图标。

```js
render() {
  return (
    <div>
      <Button type="primary" icon="edit"></Button>
      <Button type="primary" icon="share"></Button>
      <Button type="primary" icon="delete"></Button>
      <Button type="primary" icon="search">搜索</Button>
      <Button type="primary">上传<i className="el-icon-upload el-icon-right"></i></Button>
    </div>
  )
}
```
:::

### 按钮组

以按钮组的方式出现，常用于多项类似操作。

:::demo 使用`Button.Group`标签来嵌套你的按钮。

```js
render() {
  return (
    <div>
      <Button.Group>
          <Button type="primary" icon="arrow-left">上一页</Button>
          <Button type="primary">下一页<i className="el-icon-arrow-right el-icon-right"></i></Button>
      </Button.Group>
      <Button.Group>
          <Button type="primary" icon="edit"></Button>
          <Button type="primary" icon="share"></Button>
          <Button type="primary" icon="delete"></Button>
      </Button.Group>
    </div>
  )
}
```
:::

### 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

:::demo 要设置为 loading 状态，只要设置`loading`属性为`true`即可。

```js
render() {
  return <Button type="primary" loading={true}>加载中</Button>
}
```
:::

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`large`、`small`、`mini`，通过设置`size`属性来配置它们。

```js
render() {
  return (
    <div>
      <Button type="primary" size="large">大型按钮</Button>
      <Button type="primary">正常按钮</Button>
      <Button type="primary" size="small">小型按钮</Button>
      <Button type="primary" size="mini">超小按钮</Button>
    </div>
  )
}
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   large,small,mini            |    —     |
| type     | 类型   | string    |   primary,success,warning,danger,info,text |     —    |
| plain     | 是否朴素按钮   | Boolean    | true,false | false   |
| loading     | 是否加载中状态   | Boolean    | — | false   |
| disabled  | 禁用    | boolean   | true, false   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
| nativeType | 原生 type 属性 | string | button,submit,reset | button |

## Alert 警告

用于页面中展示重要的提示信息。

### 基本用法

页面中的非浮层元素，不会自动消失。

::: demo Alert 组件提供四种主题，由`type`属性指定，默认值为`info`。
```js
render() {
  return (
    <div>
      <Alert title="成功提示的文案" type="success" />
      <Alert title="消息提示的文案" type="info" />
      <Alert title="警告提示的文案" type="warning" />
      <Alert title="错误提示的文案" type="error" />
    </div>
  )
}
```
:::

### 自定义关闭按钮

自定义关闭按钮为文字或其他符号。

::: demo 在 Alert 组件中，你可以设置是否可关闭，关闭按钮的文本以及关闭时的回调函数。`closable`属性决定是否可关闭，接受`boolean`，默认为`true`。你可以设置`closeText`属性来代替右侧的关闭图标，注意：`closeText`必须为文本。设置`onClose`事件来设置关闭时的回调。
```js
render() {
  return (
    <div>
      <Alert title="不可关闭的 alert" type="success" closable={false} />
      <Alert title="自定义 close-text" type="info" closeText="知道了" />
      <Alert title="设置了回调的 alert" type="warning" onClose={() => alert('Hello World!')}/>
    </div>
  )
}
```
:::

### 带有 icon

表示某种状态时提升可读性。

::: demo 通过设置`showIcon`属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。
```js
render() {
  return (
    <div>
      <Alert title="成功提示的文案" type="success" showIcon={true} />
      <Alert title="消息提示的文案" type="info" showIcon={true} />
      <Alert title="警告提示的文案" type="warning" showIcon={true} />
      <Alert title="错误提示的文案" type="error" showIcon={true} />
    </div>
  )
}
```
:::

### 带有辅助性文字介绍

包含标题和内容，解释更详细的警告。

::: demo 除了必填的`title`属性外，你可以设置`description`属性来帮助你更好地介绍，我们称之为辅助性文字。辅助性文字只能存放单行文本，会自动换行显示。
```js
render() {
  return (
    <Alert
      type="success"
      title="带辅助性文字介绍"
      description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……" />
  )
}
```
:::

### 带有 icon 和辅助性文字介绍

::: demo 最后，这是一个同时具有 icon 和辅助性文字的样例。
```js
render() {
  return (
    <div>
      <Alert title="成功提示的文案" type="success" description="文字说明文字说明文字说明文字说明文字说明文字说明"  showIcon={true} />
      <Alert title="消息提示的文案" type="info" description="文字说明文字说明文字说明文字说明文字说明文字说明" showIcon={true} />
      <Alert title="警告提示的文案" type="warning" description="文字说明文字说明文字说明文字说明文字说明文字说明" showIcon={true} />
      <Alert title="错误提示的文案" type="error" description="文字说明文字说明文字说明文字说明文字说明文字说明" showIcon={true} />
    </div>
  )
}
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| **title** | 标题，**必选参数** | string | — | — |
| type | 主题 | string | success/warning/info/error | info |
| description | 辅助性文字 | string | — | — |
| closable | 是否可关闭 | boolean | — | true |
| closeText | 关闭按钮自定义文本 | string | — | — |
| showIcon | 是否显示图标 | boolean | — | false |


### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| onClose | 关闭alert时触发的事件 | — |

## Badge 标记

出现在按钮、图标旁的数字或状态标记。

### 基础用法
展示新消息数量。

:::demo 定义`value`属性，它接受`Number`或者`String`。

```js
render() {
  return (
    <div>
      <Badge value={ 12 }>
        <Button size="small">评论</Button>
      </Badge>
      <Badge value={ 3 }>
        <Button size="small">回复</Button>
      </Badge>
      <Dropdown trigger="click" menu={(
        <Dropdown.Menu>
          <Dropdown.Item className="clearfix">
            <span>评论</span><Badge className="mark" value={ 12 } />
          </Dropdown.Item>
          <Dropdown.Item className="clearfix">
            <span>回复</span><Badge className="mark" value={ 3 } />
          </Dropdown.Item>
        </Dropdown.Menu>
        )}
      >
        <span className="el-dropdown-link">
          点我查看<i className="el-icon-caret-bottom el-icon--right"></i>
        </span>
      </Dropdown>
    </div>
  )
}
```
:::

### 最大值
可自定义最大值。

:::demo 由`max`属性定义，它接受一个`Number`，需要注意的是，只有当`value`为`Number`时，它才会生效。

```js
render() {
  return (
    <div>
      <Badge value={ 200 } max={ 99 }>
        <Button size="small">评论</Button>
      </Badge>
      <Badge value={ 100 } max={ 10 }>
        <Button size="small">回复</Button>
      </Badge>
    </div>
  )
}
```
:::

### 自定义内容
可以显示数字以外的文本内容。

:::demo 定义`value`为`String`类型是时可以用于显示自定义文本。

```js
render() {
  return (
    <div>
      <Badge value={ 'new' }>
        <Button size="small">评论</Button>
      </Badge>
      <Badge value={ 'hot' }>
        <Button size="small">回复</Button>
      </Badge>
    </div>
  )
}
```
:::

### 小红点
以红点的形式标注需要关注的内容。

:::demo 除了数字外，设置`isDot`属性，它接受一个`Boolean`。

```js
render() {
  return (
    <div>
      <Badge isDot>
        数据查询
      </Badge>
      <Badge isDot>
        <Button className="share-button" icon="share" type="primary"></Button>
      </Badge>
    </div>
  )
}
```
:::

### Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value          | 显示值      | string, number          |          —             |    —     |
| max          |  最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型    | number  |         —              |     —    |
| isDot       | 小圆点    | boolean  |  —  |  false |

## Card 卡片
将信息聚合在卡片容器中展示。

### 基础用法

包含标题，内容和操作。

:::demo Card 组件包括`header`和`body`部分，`header`部分需要有显式具名 slot 分发，同时也是可选的。
```js
render() {
  return (
    <Card
      className="box-card"
      header={
        <div className="clearfix">
          <span style={{ "lineHeight": "36px" }}>卡片名称</span>
          <span style={{ "float": "right" }}>
            <Button type="primary">操作按钮</Button>
          </span>
        </div>
      }
    >
      <div className="text item">列表内容 1</div>
      <div className="text item">列表内容 2</div>
      <div className="text item">列表内容 3</div>
      <div className="text item">列表内容 4</div>
    </Card>
  )
}
```
:::

### 简单卡片

卡片可以只有内容区域。

:::demo
```js
render() {
  return (
    <Card className="box-card">
      <div className="text item">列表内容 0</div>
      <div className="text item">列表内容 1</div>
      <div className="text item">列表内容 2</div>
      <div className="text item">列表内容 3</div>
    </Card>
  )
}
```
:::

### 带图片

可配置定义更丰富的内容展示。

:::demo 配置`body-style`属性来自定义`body`部分的`style`，我们还使用了布局组件。
```js
render() {
  return (
    <Layout.Row>
      <Layout.Col span={ 8 } offset={ 0 }>
        <Card bodyStyle={{ padding: 0 }}>
          <img src={this.props.imgSrc} className="image" />
          <div style={{ padding: 14 }}>
            <span>好吃的汉堡</span>
            <div className="bottom clearfix">
              <time className="time">2016-10-21 16:19</time>
              <Button type="text" className="button">操作按钮</Button>
            </div>
          </div>
        </Card>
      </Layout.Col>
      <Layout.Col span={ 8 } offset={ 2 }>
        <Card bodyStyle={{ padding: 0 }}>
          <img src={this.props.imgSrc} className="image" />
          <div style={{ padding: 14 }}>
            <span>好吃的汉堡</span>
            <div className="bottom clearfix">
              <time className="time">2016-10-21 16:19</time>
              <Button type="text" className="button">操作按钮</Button>
            </div>
          </div>
        </Card>
      </Layout.Col>
    </Layout.Row>
  )
}
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| header | 设置 header，也可以通过 `slot#header` 传入 DOM | string| — | — |
| bodyStyle | 设置 body 的样式| object| — | { padding: '20px' } |

## Carousel 走马灯

在有限空间内，循环播放同一类型的图片、文字等内容

### 基础用法

适用广泛的基础用法

::: demo 结合使用`Carousel`和`Carousel.Item`标签就得到了一个走马灯。幻灯片的内容是任意的，需要放在`Carousel.Item`标签中。默认情况下，在鼠标 hover 底部的指示器时就会触发切换。通过设置`trigger`属性为`click`，可以达到点击触发的效果。
```js
render() {
  return (
    <div className="demo-1 small">
      <div className="block">
        <span className="demonstration">默认 Hover 指示器触发</span>
        <Carousel height="150px">
          {
            [1,2,3,4].map((item, index) => {
              return (
                <Carousel.Item key={index}>
                  <h3>{item}</h3>
                </Carousel.Item>
              )
            })
          }
        </Carousel>
      </div>
      <div className="block">
        <span className="demonstration">Click 指示器触发</span>
        <Carousel trigger="click" height="150px">
          {
            [1,2,3,4].map((item, index) => {
              return (
                <Carousel.Item key={index}>
                  <h3>{item}</h3>
                </Carousel.Item>
              )
            })
          }
        </Carousel>
      </div>
    </div>
  )
}
```
:::

### 指示器

可以将指示器的显示位置设置在容器外部

::: demo `indicator-position`属性定义了指示器的位置。默认情况下，它会显示在走马灯内部，设置为`outside`则会显示在外部；设置为`none`则不会显示指示器。
```js
render() {
  return (
    <div className="demo-2 medium">
      <Carousel indicatorPosition="outside">
        {
          [1,2,3,4].map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <h3>{item}</h3>
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    </div>
  )
}
```
:::

### 切换箭头
可以设置切换箭头的显示时机

::: demo `arrow`属性定义了切换箭头的显示时机。默认情况下，切换箭头只有在鼠标 hover 到走马灯上时才会显示；若将`arrow`设置为`always`，则会一直显示；设置为`never`，则会一直隐藏。
```js
render() {
  return (
    <div className="demo-3 medium">
      <Carousel interval="5000" arrow="always">
        {
          [1,2,3,4].map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <h3>{item}</h3>
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    </div>
  )
}
```
:::

### 卡片化
当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格

::: demo 将`type`属性设置为`card`即可启用卡片模式。从交互上来说，卡片模式和一般模式的最大区别在于，可以通过直接点击两侧的幻灯片进行切换。
```js
render() {
  return (
    <div className="demo-4 medium">
      <Carousel interval="4000" type="card" height="200px">
        {
          [1,2,3,4,5,6].map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <h3>{item}</h3>
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    </div>
  )
}
```
:::

### 扁平卡片化
统一卡片大小

::: demo 将`type`属性设置为`flatcard`即可启用扁平卡片模式。从交互上来说，卡片模式和一般模式的最大区别在于，可以通过直接点击两侧的幻灯片进行切换。
```js
render() {
  return (
    <div className="demo-4 medium">
      <Carousel interval="4000" type="flatcard" height="200px">
        {
          [1,2,3,4,5,6].map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <h3>{item}</h3>
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    </div>
  )
}
```
:::

### Carousel Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | 走马灯的高度 | number | — | 300 |
| initialIndex | 初始状态激活的幻灯片的索引，从 0 开始 | number | — | 0 |
| trigger | 指示器的触发方式 | string | click | — |
| autoplay | 是否自动切换 | boolean | — | true |
| interval | 自动切换的时间间隔，单位为毫秒 | number | — | 3000 |
| indicatorPosition | 指示器的位置 | string | outside/none | — |
| arrow | 切换箭头的显示时机 | string | always/hover/never | hover |
| type | 走马灯的类型 | string | card/flatcard | — |

### Carousel Events
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| onChange | 幻灯片切换时触发 | 目前激活的幻灯片的索引，原幻灯片的索引 |

### Carousel Methods
| 方法名      | 说明          | 参数 |
|---------- |-------------- | -- |
| setActiveItem | 手动切换幻灯片 | 需要切换的幻灯片的索引，从 0 开始；或相应 `Carousel.Item` 的 `name` 属性值 |
| prev | 切换至上一张幻灯片 | — |
| next | 切换至下一张幻灯片 | — |

### Carousel-Item Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | 幻灯片的名字，可用作 `setActiveItem` 的参数 | string | — | — |

### 基础用法

可同时展开多个面板，面板之间不影响

:::demo
```js


render() {
  const activeName = "1";
  return (
    <Collapse value={activeName}>
      <Collapse.Item title="一致性 Consistency" name="1">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </Collapse.Item>
      <Collapse.Item title="反馈 Feedback" name="2">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </Collapse.Item>
      <Collapse.Item title="效率 Efficiency" name="3">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </Collapse.Item>
      <Collapse.Item title="可控 Controllability" name="4">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </Collapse.Item>
    </Collapse>
  )
}
```
:::

### 手风琴效果

每次只能展开一个面板

:::demo 通过 `accordion` 属性来设置是否以手风琴模式显示。
```js
constructor(props) {
  super(props)

  this.state = {
    activeName: '1'
  }
}

render() {
  return (
    <div>
      <Button
        type="primary"
        style={{marginBottom: '15px'}}
        onClick={() => this.setState({ activeName: '3' })}
      >
        打开第三个
      </Button>
      <Collapse value={this.state.activeName} accordion>
        <Collapse.Item title="一致性 Consistency" name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </Collapse.Item>
        <Collapse.Item title="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </Collapse.Item>
        <Collapse.Item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </Collapse.Item>
        <Collapse.Item title="可控 Controllability" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </Collapse.Item>
      </Collapse>
    </div>
  )
}
```
:::

### 自定义面板标题

可以通过 `title` 属性来实现自定义面板的标题内容，以实现增加图标等效果。

:::demo
```js
render() {
  return (
    <Collapse accordion>
      <Collapse.Item title={<span>一致性 Consistency<i className="header-icon el-icon-information"></i></span>}>
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </Collapse.Item>
      <Collapse.Item title="反馈 Feedback">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </Collapse.Item>
      <Collapse.Item title="效率 Efficiency">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </Collapse.Item>
      <Collapse.Item title="可控 Controllability">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </Collapse.Item>
    </Collapse>
  )
}
```
:::

### Collapse Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| accordion | 是否手风琴模式 | boolean | — | false |
| value | 当前激活的面板(如果是手风琴模式，绑定值类型需要为`string`，否则为`array`) | string/array | — | — |

### Collapse Events
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| onChange | 当前激活面板改变时触发(如果是手风琴模式，参数类型为`string`，否则为`array`) | (activeNames: array/string) |


### Collapse Item Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | 唯一标志符 | string/number | — | — |
| title | 面板标题 | string/node | — | — |

## ColorPicker 颜色选择器

用于颜色选择，支持多种格式。

### 基础用法

:::demo 通过value属性控制当前显示的颜色。
```js
render() {
  const color1 = '#20a0ff';
  const color2 = null;
  return (
    <div>
      <div className="block">
        <span className="demonstration">有默认值</span>
        <ColorPicker value={color1}></ColorPicker>
      </div>
      <div className="block">
        <span className="demonstration">无默认值</span>
        <ColorPicker value={color2}></ColorPicker>
      </div>
    </div>
  )
}
```
:::

### 选择透明度

:::demo ColorPicker 支持普通颜色，也支持带 Alpha 通道的颜色，通过`showAlpha`属性即可控制是否支持透明度的选择。
```js
render() {
  const color3 = 'rgba(19, 206, 102, 0.8)';
  return (
    <div style={{padding: '24px'}}>
      <ColorPicker value={color3} showAlpha></ColorPicker>
    </div>
  )
}
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| showAlpha | 是否支持透明度选择 | boolean | — | false |
| colorFormat | 写入 value 的颜色的格式 | string | hsl / hsv / hex / rgb | hex（show-alpha 为 false）/ rgb（show-alpha 为 true） |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| onChange | 当绑定值变化时触发 | 当前值 |

## 自定义主题
Element 默认提供一套主题，CSS 命名采用 BEM 的风格方便使用者覆盖样式。如果你想完全替换主题色或者部分样式，可以使用下面方法。

### 安装工具
首先安装「主题生成工具」，可以全局安装或者安装在当前项目下，推荐安装在项目里，方便别人 clone 项目时能直接安装依赖并启动，这里以全局安装做演示。
```shell
npm i element-theme -g
```

安装默认主题，可以从 npm 安装或者从 GitHub 拉取最新代码。
```shell
# 从 npm
npm i element-theme-default -D

# 从 GitHub
npm i https://github.com/ElementUI/theme-default -D
```

### 初始化变量文件
主题生成工具安装成功后，如果全局安装可以在命令行里通过 `et` 调用工具，如果安装在当前目录下，需要通过 `node_modules/.bin/et` 访问到命令。执行 `-i` 初始化变量文件。默认输出到 `element-variables.css`，当然你可以传参数指定文件输出目录。

```shell
et -i [可以自定义变量文件]

> ✔ Generator variables file
```

如果使用默认配置，执行后当前目录会有一个 `element-variables.css` 文件。内部包含了主题所用到的所有变量，它们使用 CSS4 的风格定义。大致结构如下：
```css
:root {

  /* Colors
  -------------------------- */
  --color-primary: #20a0ff;
  --color-success: #13ce66;
  --color-warning: #f7ba2a;
  --color-danger: #ff4949;
  --color-info: #50BFFF;
  --color-blue: #2e90fe;
  --color-blue-light: #5da9ff;
  --color-blue-lighter: rgba(var(--color-blue), 0.12);
  --color-white: #fff;
  --color-black: #000;
  --color-grey: #C0CCDA;
```

### 修改变量
直接编辑 `element-variables.css` 文件，例如修改主题色为红色。
```CSS
--color-primary: red;
```

### 编译主题
保存文件后，到命令行里执行 `et` 编译主题，如果你想启用 `watch` 模式，实时编译主题，增加 `-w` 参数；如果你在初始化时指定了自定义变量文件，则需要增加 `-c` 参数，并带上你的变量文件名
```shell
et

> ✔ build theme font
> ✔ build element theme
```

### 引入自定义主题
默认情况下编译的主题目录是放在 `./theme` 下，你可以通过 `-o` 参数指定打包目录。像引入默认主题一样，在代码里直接引用 `theme/index.css` 文件即可。

```javascript
import '../theme/index.css'
import 'element-ui'
```

### 搭配插件按需引入组件主题
如果是搭配 `babel-plugin-component` 一起使用，只需要修改 `.babelrc` 的配置，指定 `styleLibraryName` 路径为自定义主题相对于 `.babelrc` 的路径，注意要加 `~`。
```json
{
  "plugins": [["component", [
    {
      "libraryName": "element-ui",
      "styleLibraryName": "~theme"
    }
  ]]]
}
```

## Dialog 对话框
在保留当前页面状态的情况下，告知用户并承载相关操作。

### 基本用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。

:::demo 需要设置`visible`属性，它接收`Boolean`，当为`true`时显示 Dialog。Dialog 分为两个部分：`Dialog.Body`和`Dialog.Footer`。`title`属性用于定义标题，它是可选的，默认值为空。

```js
constructor(props) {
  super(props);

  this.state = {
    dialogVisible: false
  };
}

render() {
  return (
    <div>
      <Button type="text" onClick={ () => this.setState({ dialogVisible: true }) }>点击打开 Dialog</Button>
      <Dialog
        title="提示"
        size="tiny"
        visible={ this.state.dialogVisible }
        onCancel={ () => this.setState({ dialogVisible: false }) }
        lockScroll={ false }
      >
        <Dialog.Body>
          <span>这是一段信息</span>
        </Dialog.Body>
        <Dialog.Footer className="dialog-footer">
          <Button onClick={ () => this.setState({ dialogVisible: false }) }>取消</Button>
          <Button type="primary" onClick={ () => this.setState({ dialogVisible: false }) }>确定</Button>
        </Dialog.Footer>
      </Dialog>
    </div>
  )
}
```
:::

### 自定义内容

Dialog 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了 Element Table 和 Form 组件的两个样例。

:::demo
```js
constructor(props) {
  super(props);

  this.state = {
    dialogVisible2: false,
    dialogVisible3: false,
    form: {
      name: '',
      region: ''
    }
  };

  this.table = {
    columns: [
      {
        label: "日期",
        prop: "date",
        width: 150
      },
      {
        label: "姓名",
        prop: "name",
        width: 100
      },
      {
        label: "地址",
        prop: "address"
      }
    ],
    data: [{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }]
  };
}

render() {
  return (
    <div>
      <Button type="text" onClick={ () => this.setState({ dialogVisible2: true }) } type="text">打开嵌套表格的 Dialog</Button>
      <Dialog
        title="收货地址"
        visible={ this.state.dialogVisible2 }
        onCancel={ () => this.setState({ dialogVisible2: false }) }
      >
        <Dialog.Body>
          {this.state.dialogVisible2 && (
            <Table
             style={{width: '100%'}}
             stripe={true}
             columns={this.table.columns}
             data={this.table.data} />
          )}
        </Dialog.Body>
      </Dialog>
      <Button type="text" onClick={ () => this.setState({ dialogVisible3: true }) } type="text">打开嵌套表单的 Dialog</Button>
      <Dialog
        title="收货地址"
        visible={ this.state.dialogVisible3 }
        onCancel={ () => this.setState({ dialogVisible3: false }) }
      >
        <Dialog.Body>
          <Form model={this.state.form}>
            <Form.Item label="活动名称" labelWidth="120">
              <Input value={this.state.form.name}></Input>
            </Form.Item>
            <Form.Item label="活动区域" labelWidth="120">
              <Select value={this.state.form.region} placeholder="请选择活动区域">
                <Select.Option label="区域一" value="shanghai"></Select.Option>
                <Select.Option label="区域二" value="beijing"></Select.Option>
              </Select>
            </Form.Item>
          </Form>
        </Dialog.Body>

        <Dialog.Footer className="dialog-footer">
          <Button onClick={ () => this.setState({ dialogVisible3: false }) }>取 消</Button>
          <Button type="primary" onClick={ () => this.setState({ dialogVisible3: false }) }>确 定</Button>
        </Dialog.Footer>
      </Dialog>
    </div>
  )
}
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title     | Dialog 的标题 | string    | —                               | —      |
| size      | Dialog 的大小 | string    | tiny/small/large/full | small |
| top       | Dialog CSS 中的 top 值（仅在 size 不为 full 时有效） | string    | —                       | 15%     |
| modal     | 是否需要遮罩层   | boolean   | — | true |
| lockScroll | 是否在 Dialog 出现时将 body 滚动锁定 | boolean | — | true |
| customClass      | Dialog 的自定义类名 | string    | — | — |
| closeOnClickModal | 是否可以通过点击 modal 关闭 Dialog | boolean    | — | true |
| closeOnPressEscape | 是否可以通过按下 ESC 关闭 Dialog | boolean    | — | true |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| onClose  | Dialog 关闭的回调 | — |
| onOpen  | Dialog 打开的回调 | — |

## Dropdown 下拉菜单

将动作或菜单折叠到下拉菜单中。

### 基础用法

移动到下拉菜单上，展开更多操作。

:::demo 显示下拉菜单，默认情况下，下拉按钮只要`hover`即可，无需点击。

```js
render() {
  return (
    <Dropdown menu={(
      <Dropdown.Menu>
        <Dropdown.Item>黄金糕</Dropdown.Item>
        <Dropdown.Item>狮子头</Dropdown.Item>
        <Dropdown.Item>螺蛳粉</Dropdown.Item>
        <Dropdown.Item disabled>双皮奶</Dropdown.Item>
        <Dropdown.Item divided>蚵仔煎</Dropdown.Item>
      </Dropdown.Menu>
      )}
    >
      <span className="el-dropdown-link">
        下拉菜单<i className="el-icon-caret-bottom el-icon--right"></i>
      </span>
    </Dropdown>
  )
}
```
:::

### 触发对象

可使用按钮触发下拉菜单。

:::demo 设置`splitButton`属性来让触发下拉元素呈现为按钮组，左边是功能按钮，右边是触发下拉菜单的按钮，设置为`true`即可。

```js
render() {
  return (
    <div>
      <Dropdown menu={(
        <Dropdown.Menu>
          <Dropdown.Item>黄金糕</Dropdown.Item>
          <Dropdown.Item>狮子头</Dropdown.Item>
          <Dropdown.Item>螺蛳粉</Dropdown.Item>
          <Dropdown.Item>双皮奶</Dropdown.Item>
          <Dropdown.Item>蚵仔煎</Dropdown.Item>
        </Dropdown.Menu>
      )}>
        <Button type="primary">
          更多菜单<i className="el-icon-caret-bottom el-icon--right"></i>
        </Button>
      </Dropdown>
      <Dropdown splitButton={true} type="primary" onClick={this.handleClick.bind(this)} menu={(
        <Dropdown.Menu>
          <Dropdown.Item>黄金糕</Dropdown.Item>
          <Dropdown.Item>狮子头</Dropdown.Item>
          <Dropdown.Item>螺蛳粉</Dropdown.Item>
          <Dropdown.Item>双皮奶</Dropdown.Item>
          <Dropdown.Item>蚵仔煎</Dropdown.Item>
        </Dropdown.Menu>
      )}>更多菜单</Dropdown>
    </div>
  )
}

handleClick() {
  alert('button click');
}
```
:::

### 触发方式

可以配置 click 激活或者 hover 激活。

:::demo 在`trigger`属性设置为`click`即可。
```js
render() {
  return (
    <Layout.Row className="block-col-2">
      <Layout.Col span="12">
        <span className="demonstration">hover 激活</span>
        <Dropdown menu={(
          <Dropdown.Menu>
            <Dropdown.Item>黄金糕</Dropdown.Item>
            <Dropdown.Item>狮子头</Dropdown.Item>
            <Dropdown.Item>螺蛳粉</Dropdown.Item>
            <Dropdown.Item>双皮奶</Dropdown.Item>
            <Dropdown.Item>蚵仔煎</Dropdown.Item>
          </Dropdown.Menu>
        )}>
          <span className="el-dropdown-link">
            下拉菜单<i className="el-icon-caret-bottom el-icon--right"></i>
          </span>
        </Dropdown>
      </Layout.Col>
      <Layout.Col span="12">
        <span className="demonstration">click 激活</span>
        <Dropdown trigger="click" menu={(
          <Dropdown.Menu>
            <Dropdown.Item>黄金糕</Dropdown.Item>
            <Dropdown.Item>狮子头</Dropdown.Item>
            <Dropdown.Item>螺蛳粉</Dropdown.Item>
            <Dropdown.Item>双皮奶</Dropdown.Item>
            <Dropdown.Item>蚵仔煎</Dropdown.Item>
          </Dropdown.Menu>
        )}>
          <span className="el-dropdown-link">
            下拉菜单<i className="el-icon-caret-bottom el-icon--right"></i>
          </span>
        </Dropdown>
      </Layout.Col>
    </Layout.Row>
  )
}
```
:::

### 菜单隐藏方式

可以`hideOnClick`属性来配置。

:::demo 下拉菜单默认在点击菜单项后会被隐藏，将`hideOnClick`属性默认为`false`可以关闭此功能。
```js
render() {
  return (
    <Dropdown hideOnClick={false} menu={(
      <Dropdown.Menu>
        <Dropdown.Item>黄金糕</Dropdown.Item>
        <Dropdown.Item>狮子头</Dropdown.Item>
        <Dropdown.Item>螺蛳粉</Dropdown.Item>
        <Dropdown.Item disabled>双皮奶</Dropdown.Item>
        <Dropdown.Item divided>蚵仔煎</Dropdown.Item>
      </Dropdown.Menu>
    )}>
      <span className="el-dropdown-link">
        下拉菜单<i className="el-icon-caret-bottom el-icon--right"></i>
      </span>
    </Dropdown>
  )
}
```
:::

### 指令事件

点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作

:::demo
```js
handleCommand(command) {
  Message('click on item ' + command);
}

render() {
  return (
    <Dropdown onCommand={this.handleCommand.bind(this)} menu={(
      <Dropdown.Menu>
        <Dropdown.Item command="a">黄金糕</Dropdown.Item>
        <Dropdown.Item command="b">狮子头</Dropdown.Item>
        <Dropdown.Item command="c">螺蛳粉</Dropdown.Item>
        <Dropdown.Item command="d" disabled>双皮奶</Dropdown.Item>
        <Dropdown.Item command="e" divided>蚵仔煎</Dropdown.Item>
      </Dropdown.Menu>
    )}>
      <span className="el-dropdown-link">
        下拉菜单<i className="el-icon-caret-bottom el-icon--right"></i>
      </span>
    </Dropdown>
  )
}
```
:::

### Dropdown Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| type          | 菜单按钮类型，同 Button 组件(只在`splitButton`为 true 的情况下有效)   | string  |          —             |    —     |
| size          | 菜单按钮尺寸，同 Button 组件(只在`splitButton`为 true 的情况下有效)     | string          | — | — |
| splitButton  | 下拉触发元素呈现为按钮组    | boolean  |    —  |  false |
| menuAlign    | 菜单水平对齐方向     | string          | start, end  | end |
| trigger       | 触发下拉的行为     | string          | hover, click  | hover |
| hideOnClick | 是否在点击菜单项后隐藏菜单     | boolean          | — | true |

### Dropdown Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| onClick  | `splitButton` 为 true 时，点击左侧按钮的回调 | — |
| onCommand  | 点击菜单项触发的事件回调 | Dropdown.Item 的指令 |
| onVisibleChange | 下拉框出现/隐藏时触发 | 出现则为 true，隐藏则为 false |

### Dropdown Menu Item Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| command       | 指令     | string          | — | — |
| disabled      | 禁用     | boolean          | — | false |
| divided       | 显示分割线     | boolean          | — | false |
