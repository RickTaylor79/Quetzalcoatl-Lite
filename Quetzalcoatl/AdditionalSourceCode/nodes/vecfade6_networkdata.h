namespace project
{

struct vecfade6_networkdata: public scriptnode::dll::InterpretedNetworkData
{
	String getId() const override
	{
		return "vecfade6";
	}
	bool isModNode() const override
	{
		return false;
	}
	String getNetworkData() const override
	{
		return "2818.nT6K8CFcGW7U.nlSn4.K.6phdr+MQVSZmZPImIkAk.2hKAeF4OKi5+rIS4fwxhVp0oBn.puKKtXnuL.5.LN.TCvzqOPFnUvl2JNmqYIaDonwWTJd3zj3zZMF.NxoTNuvBBs1A7iSaio7JyNw.iLOXSrBKiJQ7FkXiYElUMhVq0bjVOqtbodsbyfcQkSjcUoWp40UMh67hMZAFpKUiJslyYphXvJSEXArwgdsSrpshGJSrZ0Ty0jGfayjXhNPPSkTK1AGObsHNxiSqkA.mL67Nsh1HlJMG6voImYYQrMOncQiXnnXmWz38pRwDvog4FqXisdohQ3woMk0J33zn3XHNsqJMyNwPqYGNMJ5UEC1lpZEZTqpfnAmxHFTSM7DmlDS3vokgspwcVg.U0J3IN70sDzykdP2jjakwh9HCpHlEJ1gqMdqfUqTfavYIaDstnVbjFJvykVgkwPpT6rB1ALKpEx40E3.zbjlbVcQ7BBrD6j5f+szyArf5ZSlkJl07xNHkPv7lJL5sJCE7jGPdfg.a9giyGsv3GNbnLssrZYoJdQs5B+PKyc.63Fsp2LPzlvAj6LaZ4IwpLxJETpp1DbiRfeXmWtPs2FXHM1LQLyhypoEtnwaVlJrD3D74umCQ4kXCrIRMkfgHqpSfezZUSMSJ7fiRy7SqkAU7dgn89C4OXKA6HXzjFyLpzZX2tf2cO0N+4u6d6Nepk5ntBEVfYmqgbtmno24Ooe56++++++++++++++G5etIoHHz6+28W2SPmyORQQRNnnGBilfNDDTB58fhd8+O369C4tW296oY5kbJ2LU6iZ.WtnUXAfYEsPCrw4EkB7CK3kDAJBKEAgdu+vrHmXt0pUFmfHRe+Nt6v08DKJnEovP1DskGoHXimbQFyOTvOZsG.jU0HDM8j7mMSspFgci1NYXlkKtXTy3C3X.K0qGucMDnGu43NeVE1ojVUI.OGJXtQK1g3rhZykZiAzzXopl1rLYLugR1x3FY9glq4FSoU17p1Yzfl1KebqX3HSalYvRrTIyNN.ShVVwKyJHSOGB0t9A8buG59a.KeB99o2zqA40SrMWdB6Mz8ZWzC2qLUqXCOjjixqcylRY0hk3Mj2RQu+4vUjJie3s6mjhfPu2amOIE0t2jTDD58uTDD58dqANvoom2RSd+PSHn8vfm6+++++e2+289c28t6t6t6Q96e+teRJxgNjKqpXxlVLVvMzsCamS5c2c2c2c2c2eua26t8t6.C1CpRLXpZFZ...HfNHtJ..HLVRTJF5HNBgFDEE.D.F.IBDDB..B..D.AX...f.P..vP.PDRhQ1gYvNJSjxTrdYp8f02hK5WCRZVPG2aAyfBN7JnyqsH1nXAVsaeC+iDtVB1o1cdxNifKsQx.h2Ws9WAGn.EWIsUK2YXbylZKXb4h13cT4HapUgVqzvZ2H+hmo6nqVOX9igbnZkvE3t5WPOqGxRjw6f6KMivl0bImdSz3XROdX.XJiGqiCuBPoihSACcSaUQsFTPX6HF1JGOmtv7Tp0Ni9B.vV5vBDJiF0wtKEN3msASJBNCC.SmHvLyTnRbRj5Yt6XQKW4Z.cUcIeOQ8YL84RKR5dZ+lHl2dgzse0o8oPV.05JfCyMb66XodZH+RjUrhCW5dl9E1RTIelzR91ATrrHvp62pBMF73zeAqYfYfF3wXTJ8Y6G4zjQhCNGlvLXjirK3k0mWzBO951GUOI7ww63bXQA0tvky7zga2YfvAZj8NOXXlBeyX2jVQ1YaYCGu5n1M9ptRMDsnpUdViPbrhiBO6zvH4k9kHKHMUrPQj7CmCSKVaJFDmKh4mY5iIJpgVoZV0rln1wkfcrIXGLg1ASjcvDrcrDYGhIXcbIXGaB1ASncnlPczDZGLQ1ASfcAtAhlFWvFmDWMRnUgxCgfGLvAUrYd99CUzOqDDxENpsK8TFg1fEEBXiZQGXs9Q5nt1gPyJ0a33eTajS2tVT28U0T6QvPoNNWcf1asKV+9Baz9Hsp02d3iZuXWZ+9Ba09.6pZGmCoiZCy+R0fxn3Qim7CY7gqLvtlF.3JXdXDpufffQRIMyPN5EhSOnQBhZGsORq3wcsWgFUp27wiZuZFKpe+hMzdEMpVu4ikFqskS0VKWm8Bwp8LZRYcVmZT6RatX8KqsUaPznx58usF0ds59kxklXGtDXWvpgAiUNCBVMrAVvCFHDDcJS4z6PsDUXf1hJzLp2WhZ0KRjXYSEawc9tdgfwrEWoXmsqF0tpovdKKlQaXnIk5Lczn1kl4h52rXCsAQip0a93wZuZik0Od0xTaT3CTFk5eEXfJEW.R9adjzbZzMPqzGrlLgLH5RYSjAflhflsWfRjbhl+RiMq0KV6LrUKHsWXqthwC.O2ApMbK.frBI.n1DZycKNkj8+QzMZSvptRh9cD5l1DYUpj.vpPp8qAdchk2MJcZOXnnNA.0lPaNK1JIZ+LhtUaB1qRswL8+LTzl4s92dLjBM4LaSTyveZ0IMWp5gmG.F+9WpHJwTXlwgXIyzbD3eAeHnavehALku7L9DNTKD+5q0falMVdQlnHnj6S71lu2ovieDh0IAP0oAB6Bl1IHExsh1rZ0BSs52xbx+6caa+MZKpwZCYj4oZD.O7H8e95otutHF7W8BiNm+wcYZQVILARZILKeEPTYtuclQlKgCzgncdkGFM61dH0mBYrwxG37PQLqKjUW6RaPROTmk1mmlWo+UrmDqJH2dQV+xusKcw6TletiQyP8AcBAD6buAygW5irZEUSNAhuYLMPholthf+N.exgTMeiuIWbEQGBUDgCHQJonQCji8HZFhms75hbqyp3HmmYGHUhFFDN56ID6B6IoFb1lAqbI98RtCvelMF6vD9DKiyxFxMCHz2WpRblxbfLuElIwyRzVt1WU5T0IEaytgH0JRM3sAf.mX8pTDAj4iNVBP0htkQi.PxnlX3+7WjYJ2mBTkpkynCAR7GoX.qATtqY31BhbSxkSnE+fcEARtse1M.cJEfuOhmLzsjwrdCTnfWzGuafkc9N8EJxzwXNuH50RmbCbPiPH6JjpIArQk3tSWaHYIy7MnitIFEFY1shUCEK+DJboF7lKLRUVGne1E8jN.qRoEoMkEMd.jm1ScEYYV7iaMlABmajenRg6PIboBLlMLtqY5Vdl+kBnOjiJU31QG4OrS8tfwJ6ikbNN43FMbN86QCGV5.rAKS10G7lPBYlNGPrnnkBOCAltjVD.+T4d9SOjJFOYHg5CVJvzrTLlk3tcbyTBFyg.zMXuxpnn8EO1ZjCBZ.NaCZvsDcbCQkP0li9WqO1vEdFxRBrZhInnEbTULM.6k1ieuNa2FCaMbBNEPTwDC4vpg1hI0ynMgGtbBYcySgxXPSD4moYSavjvfhjalKKx1DpVdeKZn2D3gadDGlc54nr93oizSrFv+aHeX00TM1q3MS7.2F1X8riA9P3.GKmU+4pB2DZMKj.foosbLw1Am7PRoe4XyvDsHgzEQXBpSz1yfgyYZvuC6gkDCre97Na0SgDOEPeo70rPZpuOyVQDI1HW00OVF+CW4+Jj0iF++Jif6vFYiZirT3VPyTNomczLH1Is3LGAQGQjB+keIyqmldvncVX3vAapT8B5TZXZg4qY2fI6k08SYQ9c2smp+Y5.d352AIYiYGFEERFdLwjx9odzgO6PTqheIndzSQNoNYCc.uRBV4aLe5Fwm0Ye9Ax9TiuCVfSHaLNYibSORvVFgfL8fbqt1seslAe.AxYeCv+5A.";
	}
};
}

