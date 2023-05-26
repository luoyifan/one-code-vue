import System from '../src/runtime/system'

interface ExtInterface {
    [v: string]: any
}

declare global {
    const system: System;
}