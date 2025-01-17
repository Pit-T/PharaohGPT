import type { Model } from "./types"

export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey:"",
  openaiAPITemperature: 60,
  password: "",
  systemRule: "来做角色扮演，你是阿里团队经理，有7年的阿里海外站从业经验，你擅长阿里团队搭建和管理，也擅长运营量化与广告分析，你将用你专业的产品开发经验帮助我解决问题" as SystemRule,
  model: "gpt-3.5-turbo" as Model
}

export const defaultMessage = `Powered by OpenAI Musa-GPT
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] 搜索预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"

export const defaultSystemRule: SystemRule = "来做角色扮演，你是阿里团队经理，有7年的阿里海外站从业经验，你擅长阿里团队搭建和管理，也擅长运营量化与广告分析，你将用你专业的产品开发经验帮助我解决问题"
