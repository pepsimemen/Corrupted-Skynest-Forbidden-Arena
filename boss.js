module.exports = {
	// 进入副本提示文
	DungeonInfo : [
		{zone: 3026, string: '<font color="#56B4E9">Corrupted Skynest Normal Mode</font> <font color="#E69F00">Guide</font>'},
		{zone: 3126, string: '<font color="#56B4E9">Corrupted Skynest Hard Mode</font> <font color="#00FFFF">Guide</font>'},
		{zone: 3027, string: 'Dante <font color="#56B4E9">Forbidden Arena</font>'}
	],
	
	// 凯尔赛克隐藏地(Corrupted Skynest)
	CK_BOSS : [
		// 120 猛烈的咆哮
		// 162 猛烈的咆哮
		// 106 前方-驴打滚
		// 156 前方-驴打滚
		// 205 前方跳跃(回避)
		// 206 后方跳跃(闪避)
		// 131 广域1实例
		{id: 103, msg: 'Tail (fly!!)'},
		{id: 153, msg: 'Tail (fly!!)'},
		{id: 108, msg: 'Turn right (knockback!!)'},
		{id: 158, msg: 'Turn right (knockback!!)'},
		{id: 109, msg: 'Turn left (knockback!!)'},
		{id: 159, msg: 'Turn left (knockback!!)'},
		{id: 118, msg: 'Jump(Knockup)'},
		{id: 160, msg: 'Jump(Knockup)'},
		{id: 137, msg: '[Outrageous] Keck Seck Builds Strength'},
		{id: 138, msg: 'Iframe! + Heal'},
		{id: 110, msg: 'Fire DOT (away)'},
		{id: 112, msg: 'Icicles DOT (away)'},
		{id: 114, msg: 'Front, fire pit DOT (away)'},
		{id: 139, msg: 'Temp60 all fire'},
		{id: 140, msg: 'Temp40 all ice'},
		// 164 [温度] 100° 全灭
		// 165 [温度] 0° 全灭
		// 切换DeBuff
		// 101 右脚(火_闪避)
		// 151 右脚(火_闪避)
		// 102 左脚(冰_格挡)
		// 152 左脚(冰_格挡)
		// 107 双脚_快
		// 157 双脚_快
		{id: 145, msg: 'Debuff Changer Stomp (Stun)'},
		{id: 104, msg: 'AOE-Ice Magic (Large)'},
		{id: 154, msg: 'AOE-Ice Magic (Small)'},
		{id: 105, msg: 'AOE-Flame Magic (Large)'},
		{id: 155, msg: 'AOE-Flame Magic (Small)'},
		// 内外鉴定
		{id: 212, msg: 'Inner fire'}, // 212 -> 141
		{id: 213, msg: 'Inner ice'}, // 213 -> 143
		{id: 214, msg: 'Inner ice'}, // 214 -> 142
		{id: 215, msg: 'Inner fire'}, // 215 -> 144
	// 以下未知
		{id: 119, msg: 'A faint roar'},
		{id: 161, msg: 'A faint roar'},
		{id: 124, msg: 'Falling at a weak altitude'},
		{id: 163, msg: 'Falling at a weak altitude'},
		
		{id: 116, msg: '(For Flame Brace) Vigorous'},// "(화염브레스용)액티브무브_Run_노멀"
		{id: 117, msg: 'Flame blues'},// "화염브레스_breath_노멀"
		
		{id: 121, msg: 'Resurrection Curse'},// "부활저주_SpwanNpc_노멀"
		{id: 122, msg: 'Summon subordinates'},// "부하소환_reactionAtk_노멀"
		{id: 123, msg: 'Waiting-Magnetic Gain Spell'},// "자기버프_Wait_노멀"
		
		{id: 125, msg: 'Proximity prohibited'},// "근거리금지_발동_SpawnNpc_노멀"
		{id: 126, msg: 'Remote disable'},// "원거리금지_발동_SpawnNpc_노멀"
		{id: 127, msg: 'Resume prohibited'},// "회복금지_발동_SpawnNpc_노멀"
		{id: 128, msg: 'Close-up prohibited'},// "근거리금지_종료_SpawnNpc_노멀"
		{id: 129, msg: 'Remote Disable End'},// "원거리금지_종료_SpawnNpc_노멀"
		{id: 130, msg: 'Restoration prohibited'},// "회복금지_종료_SpawnNpc_노멀"
		
		{id: 132, msg: 'Summon Target (475)'},// "오브젝트소환(475)_aggrochange_노말"
		{id: 133, msg: 'Target Summoning (3026)'},// "오브젝트소환(3026)_aggrochange_노말"
		{id: 134, msg: 'Wide area one man slave'},// "광역1인노예_aggrochange_노말"
		
		{id: 135, msg: '[Outrageous] Keck Sack Strong Roar'},// "[폭주]켈사이크_강한포효_Roar_노멀"
		{id: 136, msg: '[Outrageous] Keck Sieck Circle Action'},// "[폭주]켈사이크_루프동작_노멀"
		
		{id: 150, msg: 'Mobile-active'},// "액티브무브_Run_노멀"
		{id: 201, msg: 'Snoring'},// "헉헉동작_Groggy_노멀"
		{id: 204, msg: 'Substitution'},// "어그로체인지_aggrochange_노멀"
		{id: 209, msg: 'Pattern reminder'},// "모드알람_ModeAlarm_더미"
		{id: 210, msg: 'Sponsored actions'},// "스폰동작_Spawn_노멀"
		{id: 211, msg: 'End of rotation'},// "회전종료용_ModeAlarm_노멀"
		{id: 302, msg: 'Random Buff'}// "무적버프_wait_노멀"
	],
	//            0     1
	CK_TipMsg : ["IN", "OUT"],
	// Forbidden Arena()
	FA_BOSS : [
		{id: 108, msg: 'One Sword (Slow)'},    // 101 121 122 連續攻擊 -> 108 One size兩斷(坦)
		{id: 355, msg: 'Jaw crush'},    // 102 121 103 連續攻擊 -> 355 右手蓄力 -> 114 下巴粉碎
		{id: 135, msg: 'One Sword (Slow)'},    //         104 連續攻擊 -> 135 左手蓄力 -> 130 One size兩斷
		{id: 111, msg: 'Dizziness | One Sword'}, //         104 連續攻擊 -> 111 刀背打擊 -> 130 One size兩斷
		{id: 112, msg: 'Jump Back | One Sword'}, //     121 102 連續攻擊 -> 112 後退踢擊 -> 130 One size兩斷
		{id: 109, msg: 'Jump Forward | One Sword'},         // 109 向下劈擊 -> 402 等待     -> 130 One size兩斷
		
		{id: 116, msg: 'Perfect block'},    // 116 斬擊
		{id: 140, msg: 'Perfect block'},    // 140 斬擊
		
		{id: 145, msg: '3Circles|Slash'},  // 145 重擊斬 139 迴旋砍擊x2 -> 140 斬擊
		{id: 136, msg: '2Circle | one size'},  // 136 重擊斬 144 迴旋砍擊x1 -> 130 One size兩斷
		
		{id: 141, msg: 'Swinging | One Sword'}, // 141 破壞氣魄+迴旋砍擊x2 -> 146 114 130
		{id: 146, msg: 'Chin | One Sword'}, // 146 One size兩斷       -> 114 下巴粉碎 -> 130 One size兩斷
		{id: 142, msg: 'Roundabout | chin'}, // 142 破壞氣魄+迴旋砍擊x2 -> 143 114 130
		{id: 143, msg: 'One size'},        // 143 One size兩斷(取消) -> 114 下巴粉碎 -> 130 One size兩斷
		
		{id: 151, msg: 'Three cuts | One size'}, // 151 149 148三斬 -> 130 One size兩斷
		{id: 117, msg: 'Flash (Rolling)'},  //    117 瞬閃点名 -> 130 One size兩斷
		{id: 356, msg: 'Flash (Rolling)'},  //    356 瞬閃点名 -> 147 One size兩斷
		{id: 134, msg: 'Key (turn)'},  //    134 要害攻擊 -> 147 One size兩斷
		
		{id: 357, msg: 'Purple-> Explosion (Away)'}, // 357 吸收力量 -> 110 起身攻擊 -> 氣斬
		{id: 350, msg: 'Red-> Donut'},     // 350 吸收力量                 -> 302 甜甜圈
		
		{id: 351, msg: 'Broken Shield !!'},       // 护盾开始 环形爆发
		{id: 401, msg: '30%'}           // 开始
		
		// 105 連續攻擊
		// 106 迴旋砍擊x2
		// 107 憤怒一擊 / 神經劈擊
		// 113 ???
		// 115 瞬閃
		// 118 氣斬
		// 119 瞬閃 + 起身攻擊
		// 120 (右手蓄力)
		// 123 連續攻擊
		// 126 迴旋砍擊x4
		// 127 執念
		// 128 下巴粉碎
		// 129 (右手蓄力)
		// 131 重擊斬 + 迴旋砍擊x2
		// 132 ??? + One size兩斷
		// 133 瞬閃 + 氣斬
		// 137 One size兩斷
		// 138 疾走
		// 150 跑步
		// 352 护盾[不使用]
		// 353 前跳[不使用]
		// 354 护盾破碎[不使用]
		// 360 吸收力量2
		// 361 吸收力量3
	],
	FA_TipMsg : ["Identification (ready) !!"]
}
