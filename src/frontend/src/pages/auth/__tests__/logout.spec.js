import { mount } from '@vue/test-utils'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import Page from '../logout'

const vuetify = new Vuetify()

describe('logout.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      'page/title': jest.fn(),
      'loading/start': jest.fn(),
      'loading/finish': jest.fn(),
      'auth/logout': jest.fn(),
      'auth/removeSession': jest.fn(),
      'reset': jest.fn()
    }
    store = new Vuex.Store({
      actions,
      state: {
        loading: { status: false }
      }
    })
  })

  it('should match snapshot', () => {
    const w = mount(Page, {
      store,
      stubs: ['router-link', 'router-view'],
      vuetify
    })

    expect(w.html()).toMatchSnapshot()
    w.destroy()
  })
})
