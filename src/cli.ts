#!/usr/bin/env node
import {Command} from 'commander'


const program = new Command()
  .name('neardrop')
  .description('send files betweeen your nearby devices: encrypted, no accounts, no cloud.')
  .version('0.1.0')

program 
  .command('hello')
  .description('check that the setup works')
  .action(()=>{
    console.log('neardrop is alive');
   });

program.parseAsync().catch((e:Error)=>{
  console.error(`error:${e.message}`);
  process.exit(1);
});
